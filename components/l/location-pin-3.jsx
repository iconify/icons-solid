import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nxrig4bky.css';
import '../../css/f/fnxk0yb3u.css';
import '../../css/m/muxp4jajg.css';
import '../../css/p/px_w62hee.css';
import '../../css/p/p5w0y3z1g.css';
import '../../css/e/ea94ruxpy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="nxrig4bky"/><path class="fnxk0yb3u"/><path class="muxp4jajg"/><path class="px_w62hee"/><path class="p5w0y3z1g"/><path class="ea94ruxpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:location-pin-3"} {...others} />);
}

export default Component;
