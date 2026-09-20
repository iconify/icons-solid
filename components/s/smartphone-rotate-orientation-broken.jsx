import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/krd8tjkub.css';
import '../../css/s/sxsqxibve.css';
import '../../css/u/ungesnbtm.css';
import '../../css/n/n_r18s3xt.css';
import '../../css/t/th34jmter.css';
import '../../css/m/mw5i2qouq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="krd8tjkub"/><path class="sxsqxibve"/><path class="ungesnbtm"/><path class="n_r18s3xt"/><path class="th34jmter"/><path class="mw5i2qouq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-rotate-orientation-broken"} {...others} />);
}

export default Component;
