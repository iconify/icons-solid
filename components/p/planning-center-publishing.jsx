import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ic99a2yrz.css';
import '../../css/k/knn1anbex.css';
import '../../css/f/fesr6pspg.css';
import '../../css/a/a78wzac5j.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGmKs7idoM" x1="201.479" x2="1225.521" y1="177.479" y2="-846.479" gradientTransform="matrix(.4 0 0 -.4 -29.4 122.2)" gradientUnits="userSpaceOnUse"><stop offset="0" class="ic99a2yrz"/><stop offset="1" class="knn1anbex"/></linearGradient><path fill="url(#SVGmKs7idoM)" class="fesr6pspg"/><path class="a78wzac5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:planning-center-publishing"} {...others} />);
}

export default Component;
