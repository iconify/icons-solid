import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d3urgtb2i.css';
import '../../css/b/bx8jjl-jo.css';
import '../../css/a/acyy7bb5r.css';
import '../../css/y/ym1ut9bxy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="d3urgtb2i"/><path class="bx8jjl-jo"/><path class="acyy7bb5r"/><path class="ym1ut9bxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:fingerprint-outline-24px"} {...others} />);
}

export default Component;
