import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xh54mgb3v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xh54mgb3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:bell"} {...others} />);
}

export default Component;
