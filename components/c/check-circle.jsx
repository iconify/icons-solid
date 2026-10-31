import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/g/gm4w5e9xe.css';
import '../../css/i/ipkkuws8y.css';
import '../../css/l/lsxdp91bz.css';
import '../../css/r/rze47ib2l.css';
import '../../css/b/bvdy6w5ot.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="gm4w5e9xe"/><path class="ipkkuws8y"/><path class="lsxdp91bz"/><path class="rze47ib2l"/><path class="bvdy6w5ot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:check-circle"} {...others} />);
}

export default Component;
