import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9yj_vblc.css';
import '../../css/p/plktuibwy.css';
import '../../css/h/hx0ydjbga.css';
import '../../css/h/h_ulm1-0m.css';
import '../../css/d/dddqz_2ks.css';
import '../../css/m/muk7k4u2t.css';
import '../../css/t/t3-l6jb1m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z9yj_vblc"/><path class="plktuibwy"/><path class="hx0ydjbga"/><path class="h_ulm1-0m"/><path class="dddqz_2ks"/><path class="muk7k4u2t"/><path class="t3-l6jb1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:scissors-2"} {...others} />);
}

export default Component;
