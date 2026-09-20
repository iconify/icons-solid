import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qkibg5b6p.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="qkibg5b6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:user-manual-filled"} {...others} />);
}

export default Component;
