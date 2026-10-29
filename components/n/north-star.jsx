import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bnyo8mzva.css';
import '../../css/l/lrz_6qz_s.css';
import '../../css/w/wm0dg7bfr.css';
import '../../css/v/vsq9oactj.css';
import '../../css/j/jhvkw87-t.css';
import '../../css/q/qqzkb5bwc.css';
import '../../css/h/hyrsh5bfu.css';
import '../../css/n/n87mrc6pd.css';
import '../../css/c/czlwmpn8h.css';
import '../../css/y/ymixjsbtm.css';
import '../../css/j/j2lbv8byy.css';
import '../../css/u/u96saqbfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bnyo8mzva wm-a"/><path class="lrz_6qz_s wm-a"/><path class="wm-a wm0dg7bfr"/><path class="vsq9oactj wm-k"/><path class="jhvkw87-t wm-k"/><path class="qqzkb5bwc wm-k"/><path class="hyrsh5bfu wm-shine"/><path class="n87mrc6pd wm-k"/><path class="czlwmpn8h wm-k"/><path class="wm-k ymixjsbtm"/><path class="j2lbv8byy wm-deco"/><path class="u96saqbfx wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:north-star"} {...others} />);
}

export default Component;
