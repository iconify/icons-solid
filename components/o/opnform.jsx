import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5wc1_b_q.css';
import '../../css/d/dr8f4qvxq.css';
import '../../css/p/p220ddb0m.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGm8Kyf2JF" x1="256" x2="256" y1="261.8" y2="758.2" gradientTransform="translate(0 -254)" gradientUnits="userSpaceOnUse"><stop offset="0" class="h5wc1_b_q"/><stop offset="1" class="dr8f4qvxq"/></linearGradient><path fill="url(#SVGm8Kyf2JF)" class="p220ddb0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:opnform"} {...others} />);
}

export default Component;
