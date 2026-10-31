import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jjte1tbhr.css';
import '../../css/r/ralcq11vz.css';
import '../../css/s/skn8acc-z.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="jjte1tbhr"/><path class="ralcq11vz wm-k"/><path class="skn8acc-z wm-a"/><path class="klzcy0ogc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:chart-bar-increasing"} {...others} />);
}

export default Component;
