import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yp54sytzi.css';
import '../../css/a/ag72lbciv.css';
import '../../css/s/soqsp2xkn.css';
import '../../css/d/dfe-fimdz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yp54sytzi"/><path class="ag72lbciv"/><path class="soqsp2xkn"/><path class="dfe-fimdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bowling-bold-duotone"} {...others} />);
}

export default Component;
