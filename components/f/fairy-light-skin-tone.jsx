import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9wf0fz_s.css';
import '../../css/p/p59l50bdr.css';
import '../../css/z/z_42b5rua.css';
import '../../css/k/k4zy_fb6k.css';
import '../../css/u/ul-tm_bmr.css';
import '../../css/f/fq95gyetx.css';
import '../../css/p/pajctb-_b.css';
import '../../css/l/lmd8ye8xe.css';
import '../../css/e/e1b1npb4w.css';
import '../../css/u/u3rp79bbx.css';
import '../../css/m/mjsjjzbsk.css';
import '../../css/y/yjnc_3bcm.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="w9wf0fz_s"/><path class="p59l50bdr"/><path class="z_42b5rua"/><path class="k4zy_fb6k"/><path class="ul-tm_bmr"/><path class="fq95gyetx"/><path class="pajctb-_b"/><path class="lmd8ye8xe"/><path class="e1b1npb4w"/><path class="u3rp79bbx"/><path class="mjsjjzbsk"/><path class="yjnc_3bcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:fairy-light-skin-tone"} {...others} />);
}

export default Component;
