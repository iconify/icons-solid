import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n8ebqfbef.css';
import '../../css/h/hj_qm2-ev.css';
import '../../css/e/e-uqb4bzw.css';
import '../../css/f/fhmm92hsx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n8ebqfbef"/><path class="hj_qm2-ev"/><path class="e-uqb4bzw"/><path class="fhmm92hsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:dog-1"} {...others} />);
}

export default Component;
