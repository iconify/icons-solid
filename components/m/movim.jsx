import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgp9bebmo.css';
import '../../css/e/ey8l3fb4m.css';
import '../../css/i/iycln-b8i.css';
import '../../css/f/fvsqx4b-g.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVG9qplhbZB" x1="76.987" x2="664.906" y1="540.371" y2="-47.547" gradientTransform="matrix(4.2447 0 0 -4.2215 -363.418 2246.135)" gradientUnits="userSpaceOnUse"><stop offset="0" class="dgp9bebmo"/><stop offset="1" class="ey8l3fb4m"/></linearGradient><circle fill="url(#SVG9qplhbZB)" class="iycln-b8i"/><path class="fvsqx4b-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:movim"} {...others} />);
}

export default Component;
