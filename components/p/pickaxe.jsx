import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g90gctbsf.css';
import '../../css/u/uufndgb5d.css';
import '../../css/a/ayp_-pb-t.css';
import '../../css/e/ex9nbwbqn.css';
import '../../css/u/um08zv0xn.css';
import '../../css/k/kq5y4sblt.css';
import '../../css/r/rv6-ch1qd.css';
import '../../css/q/qs3k_20lc.css';
import '../../css/k/kn86zsb1i.css';
import '../../css/v/vbn8sg83g.css';
import '../../css/h/hqvf1vx8g.css';
import '../../css/o/o5ia3wtks.css';
import '../../css/v/vx17__b5t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g90gctbsf wm-shadow"/><path class="uufndgb5d wm-k"/><path class="ayp_-pb-t wm-k"/><path class="ex9nbwbqn wm-k"/><path class="um08zv0xn wm-k"/><path class="kq5y4sblt wm-shine"/><path class="rv6-ch1qd wm-k"/><path class="qs3k_20lc wm-a"/><path class="kn86zsb1i wm-a"/><path class="vbn8sg83g wm-a"/><path class="hqvf1vx8g wm-a"/><path class="o5ia3wtks wm-a"/><path class="vx17__b5t wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:pickaxe"} {...others} />);
}

export default Component;
