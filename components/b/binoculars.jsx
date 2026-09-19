import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvkc79bpm.css';
import '../../css/x/xy-e8bcsj.css';
import '../../css/o/oo94-4crs.css';
import '../../css/x/xnkb47b9o.css';
import '../../css/l/l8wsdgbip.css';
import '../../css/d/dthqtrf0t.css';
import '../../css/p/p-tplcb_f.css';
import '../../css/a/ax4oe2b_j.css';
import '../../css/x/xktd_nb9m.css';
import '../../css/v/v0wvotb-g.css';
import '../../css/a/aknqk7bxm.css';
import '../../css/w/w7v2i1xoz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="bvkc79bpm"><circle class="xy-e8bcsj"/><circle class="oo94-4crs"/><path class="xnkb47b9o"/><circle class="l8wsdgbip"/><circle class="dthqtrf0t"/><circle class="p-tplcb_f"/></g><circle class="ax4oe2b_j"/><g class="xktd_nb9m"><circle class="v0wvotb-g"/><circle class="aknqk7bxm"/></g><path class="w7v2i1xoz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:binoculars"} {...others} />);
}

export default Component;
