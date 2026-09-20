import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m-qtokbjc.css';
import '../../css/b/bi8o91bbl.css';
import '../../css/a/a1q_q574d.css';
import '../../css/c/c_w-nxbun.css';
import '../../css/v/vqnmjac0v.css';
import '../../css/x/xrt9718kq.css';
import '../../css/n/nk6cu2vzs.css';
import '../../css/z/zs0eydj5j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="m-qtokbjc"/><path class="bi8o91bbl"/><path class="a1q_q574d"/><path class="c_w-nxbun"/><path class="vqnmjac0v"/><path class="xrt9718kq"/><path class="nk6cu2vzs"/><path class="zs0eydj5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:orientation-portrait"} {...others} />);
}

export default Component;
