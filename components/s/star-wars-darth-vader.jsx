import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rw1fhnn-c.css';
import '../../css/c/cdusunbsp.css';
import '../../css/g/gtsex4-zn.css';
import '../../css/k/knb9b50zx.css';
import '../../css/a/an6e3j88l.css';
import '../../css/i/iyj_j9kyx.css';
import '../../css/o/osknk_s6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rw1fhnn-c"/><path class="cdusunbsp"/><path class="gtsex4-zn"/><path class="knb9b50zx"/><path class="an6e3j88l"/><path class="iyj_j9kyx"/><path class="osknk_s6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:star-wars-darth-vader"} {...others} />);
}

export default Component;
