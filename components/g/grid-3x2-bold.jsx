import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jyztlerrd.css';
import '../../css/g/gzh3yfbqz.css';
import '../../css/y/yn6-hjbbz.css';
import '../../css/n/ny59yrbpk.css';
import '../../css/n/nqyvhgw5r.css';
import '../../css/d/dh03szb4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jyztlerrd"/><path class="gzh3yfbqz"/><path class="yn6-hjbbz"/><path class="ny59yrbpk"/><path class="nqyvhgw5r"/><path class="dh03szb4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grid-3x2-bold"} {...others} />);
}

export default Component;
