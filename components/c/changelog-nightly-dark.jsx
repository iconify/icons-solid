import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/je26pbbfl.css';
import '../../css/k/k05n1gbkm.css';
import '../../css/m/m1tl4ebli.css';
import '../../css/m/mpat_7c0l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="je26pbbfl"/><linearGradient id="SVGgWiTcNRc" x1="36.236" x2="475.186" y1="250" y2="250" gradientTransform="matrix(1 0 0 -1 0 506)" gradientUnits="userSpaceOnUse"><stop offset="0" class="k05n1gbkm"/><stop offset="1"/></linearGradient><path fill="url(#SVGgWiTcNRc)" class="m1tl4ebli"/><linearGradient id="SVGKssLdEOI" x1="118.92" x2="416.026" y1="249.551" y2="249.551" gradientTransform="matrix(1 0 0 -1 0 506)" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" class="k05n1gbkm"/></linearGradient><path fill="url(#SVGKssLdEOI)" class="mpat_7c0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:changelog-nightly-dark"} {...others} />);
}

export default Component;
