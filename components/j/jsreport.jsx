import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ie0hfrbab.css';
import '../../css/c/cikwaf5ms.css';
import '../../css/j/jgamuhvba.css';
import '../../css/j/jo_1vrb9y.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGLbZC8bqg" x1="256.094" x2="256.094" y1="371.132" y2="101.1" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="ie0hfrbab"/><stop offset="1" class="cikwaf5ms"/></linearGradient><path fill="url(#SVGLbZC8bqg)" class="jgamuhvba"/><path class="jo_1vrb9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:jsreport"} {...others} />);
}

export default Component;
