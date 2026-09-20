import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uw7qk-b3z.css';
import '../../css/g/gjqum9bql.css';
import '../../css/k/kd-6tnbaz.css';
import '../../css/u/ue3e7eb-c.css';
import '../../css/t/t497s_bgr.css';
import '../../css/v/vlxr7bckv.css';
import '../../css/h/hrup5n97r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uw7qk-b3z"/><path class="gjqum9bql"/><path class="kd-6tnbaz"/><path class="ue3e7eb-c"/><path class="t497s_bgr"/><path class="vlxr7bckv"/><path class="hrup5n97r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:romm-snes"} {...others} />);
}

export default Component;
