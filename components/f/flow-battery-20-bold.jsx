import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqlynnpbk.css';
import '../../css/l/l314gk7pp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hqlynnpbk"/><path class="l314gk7pp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flow-battery-20-bold"} {...others} />);
}

export default Component;
