import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cz4xu3bkp.css';
import '../../css/b/bb08v89dr.css';
import '../../css/b/bov0584ws.css';
import '../../css/i/i8gnftjze.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGJHW0kcAu" x1="256" x2="256" y1="514" y2="2" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset=".55" class="cz4xu3bkp"/><stop offset="1" class="bb08v89dr"/></linearGradient><path fill="url(#SVGJHW0kcAu)" class="bov0584ws"/><path class="i8gnftjze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:telebugs"} {...others} />);
}

export default Component;
