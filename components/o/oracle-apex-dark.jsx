import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_8idg_ua.css';
import '../../css/p/p8d0bpxvc.css';
import '../../css/o/ocxmj-0eu.css';
import '../../css/m/mibif0bdg.css';
import '../../css/a/adq4yggtd.css';
import '../../css/k/kg3tgdbnz.css';
import '../../css/g/g8903tb9f.css';
import '../../css/q/q3h1-ibjp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y_8idg_ua"/><path class="p8d0bpxvc"/><path class="ocxmj-0eu"/><path class="mibif0bdg"/><path class="adq4yggtd"/><path class="kg3tgdbnz"/><path class="g8903tb9f"/><path class="q3h1-ibjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:oracle-apex-dark"} {...others} />);
}

export default Component;
