import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rzv1accga.css';
import '../../css/c/ckavt-rhr.css';
import '../../css/x/xcgprqb2i.css';
import '../../css/h/hcplgizfg.css';
import '../../css/w/w3zw72e2o.css';
import '../../css/h/h-3wlvbzu.css';
import '../../css/u/udkqbrb5h.css';
import '../../css/f/fjsovnb0k.css';
import '../../css/q/q9q4xrbpv.css';
import '../../css/l/lwrckqbjc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rzv1accga wm-shadow"/><path class="ckavt-rhr wm-shadow"/><path class="wm-k xcgprqb2i"/><path class="hcplgizfg wm-k"/><path class="w3zw72e2o wm-k"/><path class="h-3wlvbzu wm-k"/><path class="udkqbrb5h wm-shine"/><path class="fjsovnb0k wm-deco"/><path class="q9q4xrbpv wm-deco"/><path class="lwrckqbjc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:power"} {...others} />);
}

export default Component;
