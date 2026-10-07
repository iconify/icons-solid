import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uf402mu6g.css';
import '../../css/p/p1ws50bgn.css';
import '../../css/i/i8__78bqh.css';
import '../../css/v/veeyafb3e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uf402mu6g"/><linearGradient id="SVGyx5nrbNa" x1="136" x2="424" y1="426" y2="138" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="p1ws50bgn"/><stop offset="1" class="i8__78bqh"/></linearGradient><path fill="url(#SVGyx5nrbNa)" class="veeyafb3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tasterr"} {...others} />);
}

export default Component;
