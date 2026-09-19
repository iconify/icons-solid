import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w1h-ul-cd.css';
import '../../css/v/v4bz0abgi.css';
import '../../css/g/gxzmdpsnv.css';
import '../../css/h/h3ivwac8i.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="w1h-ul-cd"/><path clip-rule="evenodd" class="v4bz0abgi"/><path class="gxzmdpsnv"/><path clip-rule="evenodd" class="h3ivwac8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sd-card-outline"} {...others} />);
}

export default Component;
