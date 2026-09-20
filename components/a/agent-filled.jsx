import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4p_ytb7x.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="u4p_ytb7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:agent-filled"} {...others} />);
}

export default Component;
