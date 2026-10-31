import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r63in-l-i.css';
import '../../css/p/pndzhnboz.css';
import '../../css/c/c8pkpvtfx.css';
import '../../css/e/etdz04xnj.css';
import '../../css/j/jc4c8qb4h.css';
import '../../css/x/xhfg0zjil.css';
import '../../css/k/kpaqvrbxl.css';
import '../../css/m/mmtwirbtf.css';
import '../../css/x/xvow8ob2c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r63in-l-i wm-k"/><path class="pndzhnboz wm-a"/><path class="c8pkpvtfx wm-deco"/><path class="etdz04xnj wm-k"/><path class="jc4c8qb4h wm-a"/><path class="wm-shadow xhfg0zjil"/><path class="kpaqvrbxl wm-shine"/><path class="mmtwirbtf wm-shine"/><path class="wm-shine xvow8ob2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:messages"} {...others} />);
}

export default Component;
