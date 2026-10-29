import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oiovuxbvw.css';
import '../../css/x/x0ih3jbzu.css';
import '../../css/i/iiv4ahhjv.css';
import '../../css/q/ql5g1yvig.css';
import '../../css/b/bud5vdb7t.css';
import '../../css/y/yshdxvbhb.css';
import '../../css/i/ise39z6qe.css';
import '../../css/c/crjgy_b6p.css';
import '../../css/b/b9cu8hbxk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oiovuxbvw wm-k"/><path class="wm-k x0ih3jbzu"/><path class="iiv4ahhjv wm-k"/><path class="ql5g1yvig wm-shine"/><path class="bud5vdb7t wm-a"/><path class="wm-a yshdxvbhb"/><path class="ise39z6qe wm-a"/><path class="crjgy_b6p wm-shine"/><path class="b9cu8hbxk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:drumstick"} {...others} />);
}

export default Component;
