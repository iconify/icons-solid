import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pl5n0k6hp.css';
import '../../css/p/pyi4vjbff.css';
import '../../css/z/zabip2tto.css';
import '../../css/j/jph168byc.css';
import '../../css/a/a5wymhb4q.css';
import '../../css/i/ick2pdbas.css';
import '../../css/j/jcw_2s0wl.css';
import '../../css/r/rb6xn5zcv.css';

const viewBox = {"width":200,"height":200};
const content = `<linearGradient id="SVGmcJlQcFK" x1="100" x2="100" y1="149" y2="51" gradientUnits="userSpaceOnUse"><stop offset="0" class="pl5n0k6hp"/><stop offset="1" class="pyi4vjbff"/></linearGradient><path fill="url(#SVGmcJlQcFK)" class="zabip2tto"/><path class="jph168byc"/><linearGradient id="SVGuNLyibUk" x1="165.629" x2="188.289" y1="159.625" y2="153.553" gradientUnits="userSpaceOnUse"><stop offset="0" class="a5wymhb4q"/><stop offset="1" class="ick2pdbas"/></linearGradient><path fill="url(#SVGuNLyibUk)" clip-rule="evenodd" class="jcw_2s0wl"/><linearGradient id="SVGd2voebmP" x1="154.495" x2="170.848" y1="165.074" y2="160.692" gradientUnits="userSpaceOnUse"><stop offset="0" class="a5wymhb4q"/><stop offset="1" class="ick2pdbas"/></linearGradient><path fill="url(#SVGd2voebmP)" clip-rule="evenodd" class="rb6xn5zcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:imgproxy"} {...others} />);
}

export default Component;
