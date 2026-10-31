import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jzcfmxbdn.css';
import '../../css/u/u6u5rt_cg.css';
import '../../css/f/fomiglfis.css';
import '../../css/e/eell-kb9g.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="jzcfmxbdn"/><path class="u6u5rt_cg wm-shine"/><path class="fomiglfis wm-k"/><path class="eell-kb9g wm-a"/><path class="klzcy0ogc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:cable"} {...others} />);
}

export default Component;
