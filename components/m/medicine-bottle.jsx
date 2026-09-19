import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/k/kp3f7cc4q.css';
import '../../css/q/qfux14b2n.css';
import '../../css/u/upsyw_e2b.css';
import '../../css/c/c7fejdbab.css';
import '../../css/g/gxzjcs0el.css';
import '../../css/v/vvb-ephrn.css';
import '../../css/p/podeassbx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="kp3f7cc4q"/><path class="qfux14b2n"/><path class="upsyw_e2b"/><path class="c7fejdbab"/><path class="gxzjcs0el"/><path class="vvb-ephrn"/><path class="podeassbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:medicine-bottle"} {...others} />);
}

export default Component;
