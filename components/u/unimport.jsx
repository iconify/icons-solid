import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ahjsngb7d.css';
import '../../css/r/rjk-3wb_n.css';
import '../../css/i/ip_ro_tnt.css';
import '../../css/a/amlokqbvq.css';
import '../../css/m/ms91xhbyu.css';
import '../../css/n/no3wb8ben.css';
import '../../css/s/s3m64nloz.css';
import '../../css/s/sj9d1pbsk.css';
import '../../css/y/ye9l2gbiu.css';
import '../../css/q/qjba0cb4f.css';
import '../../css/x/x1a3uxzue.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ahjsngb7d"/><path class="rjk-3wb_n"/><path class="ip_ro_tnt"/><path class="amlokqbvq"/><path class="ms91xhbyu"/><path class="no3wb8ben"/><path class="s3m64nloz"/><path class="sj9d1pbsk"/><path class="ye9l2gbiu"/><path class="qjba0cb4f"/><path class="x1a3uxzue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"unjs:unimport"} {...others} />);
}

export default Component;
