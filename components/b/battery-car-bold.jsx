import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mpb4xabwm.css';
import '../../css/h/h3kdkghdv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><rect class="mpb4xabwm"/><path clip-rule="evenodd" class="h3kdkghdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:battery-car-bold"} {...others} />);
}

export default Component;
