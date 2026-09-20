import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-llkv2cb.css';
import '../../css/k/kckc1iwlf.css';
import '../../css/y/yq54hro4p.css';
import '../../css/k/k6lhmhbkj.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGTMXrneqk" x1="63.421" x2="420.477" y1="462.954" y2="105.897" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset="1" class="kckc1iwlf"/></linearGradient><path fill="url(#SVGTMXrneqk)" class="yq54hro4p"/><path class="k6lhmhbkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:youtrack-light"} {...others} />);
}

export default Component;
