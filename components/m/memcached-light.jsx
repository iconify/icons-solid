import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixhl30b5t.css';
import '../../css/d/d-llkv2cb.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/a/a_we93bsj.css';
import '../../css/a/af6bnpb6p.css';
import '../../css/n/npegzxm1p.css';
import '../../css/i/igveuaclx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ixhl30b5t"/><radialGradient id="SVGMkOt6cfy" cx="-54.098" cy="658.534" r=".163" gradientTransform="matrix(181.3681 0 0 -181.3681 10008.34 119904.85)" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset="1" class="vc--wpv5i"/></radialGradient><path fill="url(#SVGMkOt6cfy)" class="a_we93bsj"/><radialGradient id="SVGsT3R8cHY" cx="-55.324" cy="658.535" r=".163" gradientTransform="matrix(181.35831 0 0 -181.3582 10340.35 119898.39)" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset="1" class="vc--wpv5i"/></radialGradient><path fill="url(#SVGsT3R8cHY)" class="af6bnpb6p"/><path class="npegzxm1p"/><path class="igveuaclx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:memcached-light"} {...others} />);
}

export default Component;
