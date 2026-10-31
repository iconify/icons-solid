import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jxlqhh4bz.css';
import '../../css/u/ucpud3b-x.css';
import '../../css/t/te0vz7bvw.css';
import '../../css/f/f0p7mosim.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="jxlqhh4bz"/><path class="ucpud3b-x wm-k"/><path class="te0vz7bvw wm-a"/><path class="f0p7mosim wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:history"} {...others} />);
}

export default Component;
