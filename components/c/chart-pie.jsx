import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wx5f7pbww.css';
import '../../css/w/w52qbifwm.css';
import '../../css/g/gmktlbc8x.css';
import '../../css/d/d9nt_v3yj.css';
import '../../css/o/ojeulv-7t.css';
import '../../css/f/fb7akcc1h.css';
import '../../css/f/f59ffnvxk.css';
import '../../css/f/ffrcsybhk.css';
import '../../css/h/hsn7vr8iv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="wx5f7pbww"/><path class="w52qbifwm"/><path class="gmktlbc8x"/><path class="d9nt_v3yj"/><path class="ojeulv-7t"/><path class="fb7akcc1h"/><path class="f59ffnvxk"/><path class="ffrcsybhk"/><path class="hsn7vr8iv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:chart-pie"} {...others} />);
}

export default Component;
