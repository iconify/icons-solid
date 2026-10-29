import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ovm-x8byb.css';
import '../../css/a/aeeh_bbzs.css';
import '../../css/d/dmsek6bgn.css';
import '../../css/s/sz-rl0boz.css';
import '../../css/g/ge6t5xuoa.css';
import '../../css/c/ctr4gvbin.css';
import '../../css/k/k2jgxlb4m.css';
import '../../css/r/ruwzuibtw.css';
import '../../css/m/mo-wrhm4m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ovm-x8byb wm-shadow"/><path class="aeeh_bbzs wm-shadow"/><path class="dmsek6bgn"/><path class="sz-rl0boz"/><path class="ge6t5xuoa"/><path class="ctr4gvbin"/><path class="k2jgxlb4m wm-shine"/><path class="ruwzuibtw wm-shine"/><path class="mo-wrhm4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:redo"} {...others} />);
}

export default Component;
