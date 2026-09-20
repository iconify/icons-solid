import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hq042bbbv.css';
import '../../css/m/mxb_dmbyx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="hq042bbbv"/><path clip-rule="evenodd" class="mxb_dmbyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:play-store-flat"} {...others} />);
}

export default Component;
