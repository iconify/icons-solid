import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5h87bmtj.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="g5h87bmtj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:user-check-filled"} {...others} />);
}

export default Component;
