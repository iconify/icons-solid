import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sphwdtbjb.css';
import '../../css/v/vdmd9jb1y.css';
import '../../css/q/q_qn7fbxw.css';
import '../../css/x/x8m8gyb6u.css';

const viewBox = {"width":301,"height":219};
const content = `<g class="ft5dv1b6b"><path class="sphwdtbjb"/><path class="vdmd9jb1y"/><path class="q_qn7fbxw"/><path class="x8m8gyb6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:il"} {...others} />);
}

export default Component;
