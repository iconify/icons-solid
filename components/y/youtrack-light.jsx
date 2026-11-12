import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-llkv2cb.css';
import '../../css/k/kckc1iwlf.css';
import '../../css/y/yq54hro4p.css';
import '../../css/k/k6lhmhbkj.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVG3CbOXHuZ" x1="63.4" x2="420.5" y1="463" y2="105.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset="1" class="kckc1iwlf"/></linearGradient><path fill="url(#SVG3CbOXHuZ)" class="yq54hro4p"/><path class="k6lhmhbkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:youtrack-light"} {...others} />);
}

export default Component;
