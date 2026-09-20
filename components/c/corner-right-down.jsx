import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z28xs_bth.css';
import '../../css/h/huzwlhkfc.css';
import '../../css/q/ql538pbyt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="z28xs_bth"/><path class="huzwlhkfc"/><path class="ql538pbyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:corner-right-down"} {...others} />);
}

export default Component;
