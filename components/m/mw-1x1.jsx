import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nn4q0acxp.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/l/ltgi2h8qh.css';
import '../../css/l/lpyqa9bgk.css';
import '../../css/d/d3sf4gzju.css';
import '../../css/d/df4ijbbja.css';
import '../../css/l/leaxiin8q.css';
import '../../css/d/d96y2_irj.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGLjrVDx6r"><path class="nn4q0acxp"/></clipPath></defs><g clip-path="url(#SVGLjrVDx6r)" transform="translate(-129.8)scale(.72249)" class="nv9qcacyl"><path class="ltgi2h8qh"/><path class="lpyqa9bgk"/><path class="d3sf4gzju"/><path class="df4ijbbja"/><path class="leaxiin8q"/><path class="d96y2_irj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:mw-1x1"} {...others} />);
}

export default Component;
