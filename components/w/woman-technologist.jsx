import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ab6f40b3j.css';
import '../../css/k/kpbm2u53c.css';
import '../../css/w/w9adtxbey.css';
import '../../css/v/v3iebla_w.css';
import '../../css/o/omz_u5bmy.css';
import '../../css/n/np34o4byu.css';
import '../../css/h/h9dnnhdot.css';
import '../../css/k/knnv3wbfb.css';
import '../../css/x/xnbri7vry.css';
import '../../css/i/itei9xdnx.css';
import '../../css/r/rjr2dgnva.css';
import '../../css/l/l62ksrbmn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ab6f40b3j"/><path class="kpbm2u53c"/><path class="w9adtxbey"/><path class="v3iebla_w"/><path class="omz_u5bmy"/><path class="np34o4byu"/><path class="h9dnnhdot"/><path class="knnv3wbfb"/><path class="xnbri7vry"/><path class="itei9xdnx"/><path class="rjr2dgnva"/><path class="l62ksrbmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:woman-technologist"} {...others} />);
}

export default Component;
