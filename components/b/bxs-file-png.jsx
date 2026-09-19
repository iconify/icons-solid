import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-ok2sbil.css';
import '../../css/d/dosvuyafw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j-ok2sbil"/><path class="dosvuyafw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-file-png"} {...others} />);
}

export default Component;
