import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tnjghlfdl.css';
import '../../css/t/t20iil5tj.css';
import '../../css/p/p8jzkvbki.css';
import '../../css/e/ez4mhc56f.css';
import '../../css/o/oe5vmrb1n.css';
import '../../css/j/j3xl1tijc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="tnjghlfdl"/><path class="t20iil5tj wm-shine"/><path class="p8jzkvbki wm-k"/><path class="ez4mhc56f wm-a"/><path class="oe5vmrb1n wm-s"/><path class="j3xl1tijc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:crystal-ball"} {...others} />);
}

export default Component;
