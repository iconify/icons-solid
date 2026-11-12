import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dv1wvzrck.css';
import '../../css/w/w2ohg4bvm.css';
import '../../css/z/z0xi6qb5c.css';
import '../../css/t/t1n6a3bzu.css';
import '../../css/v/vvq6ijb7t.css';
import '../../css/i/ia5eipb1q.css';

const viewBox = {"width":512,"height":512};
const content = `<radialGradient id="SVGOu46ldHO" cx="-72.483" cy="638.313" r="19.313" gradientTransform="matrix(0 -24.0001 -24 0 15617.62 -1275.37)" gradientUnits="userSpaceOnUse"><stop offset="0" class="dv1wvzrck"/><stop offset=".462" class="w2ohg4bvm"/><stop offset=".771" class="z0xi6qb5c"/><stop offset="1" class="t1n6a3bzu"/></radialGradient><path fill="url(#SVGOu46ldHO)" class="vvq6ijb7t"/><radialGradient id="SVGERxMnlYj" cx="-74.358" cy="661.687" r="19.313" gradientTransform="matrix(0 -24.0001 24 0 -15710.37 -1272.36)" gradientUnits="userSpaceOnUse"><stop offset="0" class="dv1wvzrck"/><stop offset=".462" class="w2ohg4bvm"/><stop offset=".771" class="z0xi6qb5c"/><stop offset="1" class="t1n6a3bzu"/></radialGradient><path fill="url(#SVGERxMnlYj)" class="ia5eipb1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mirotalk"} {...others} />);
}

export default Component;
