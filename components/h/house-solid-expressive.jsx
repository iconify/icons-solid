import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wr77yibbz.css';
import '../../css/v/v5zynjfyu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wr77yibbz"/><path class="v5zynjfyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:house-solid-expressive"} {...others} />);
}

export default Component;
