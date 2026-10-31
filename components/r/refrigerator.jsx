import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jgmbzwiwd.css';
import '../../css/d/dvr789bhi.css';
import '../../css/l/l8ohf-8go.css';
import '../../css/i/iw07ocizs.css';
import '../../css/f/fmvl9jb-y.css';
import '../../css/t/tig-itbzv.css';
import '../../css/q/q_p3umq_l.css';
import '../../css/r/rj6-_z5kg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="jgmbzwiwd"/><path class="dvr789bhi"/><path class="l8ohf-8go wm-shine"/><path class="iw07ocizs wm-k"/><path class="fmvl9jb-y wm-a"/><path class="tig-itbzv"/><path class="q_p3umq_l"/><path class="rj6-_z5kg wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:refrigerator"} {...others} />);
}

export default Component;
