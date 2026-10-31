import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/k/kpy9ayipq.css';
import '../../css/c/czjh7btnl.css';
import '../../css/c/cznclccod.css';
import '../../css/r/rze47ib2l.css';
import '../../css/t/tdzg26ped.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="kpy9ayipq"/><path class="czjh7btnl"/><path class="cznclccod"/><path class="rze47ib2l"/><path class="tdzg26ped"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:circle-chevron-right"} {...others} />);
}

export default Component;
