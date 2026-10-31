import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/b/b107chb3e.css';
import '../../css/u/uqpmvwbxl.css';
import '../../css/l/l5-650bny.css';
import '../../css/j/jivp2hp_j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="b107chb3e"/><path class="uqpmvwbxl wm-shine"/><path class="l5-650bny wm-k"/><path class="jivp2hp_j wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:utensils"} {...others} />);
}

export default Component;
