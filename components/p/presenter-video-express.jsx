import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q6vwx_tvk.css';
import '../../css/h/h3gl5_b6o.css';
import '../../css/r/r969_c3-h.css';
import '../../css/t/tw4awvlts.css';
import '../../css/j/jmon4qjrz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGmAhx2dHO)"><path class="q6vwx_tvk"/><path class="h3gl5_b6o"/><path class="r969_c3-h"/><path class="tw4awvlts"/></g><defs><clipPath id="SVGmAhx2dHO"><path class="jmon4qjrz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:presenter-video-express"} {...others} />);
}

export default Component;
