import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zpipi6b-c.css';
import '../../css/m/mnlx_uq5n.css';
import '../../css/b/b0qzi4yvv.css';
import '../../css/c/c9hi2nbvd.css';
import '../../css/i/i2wae2bks.css';
import '../../css/y/yfyldmbax.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zpipi6b-c"/><path class="mnlx_uq5n"/><path class="b0qzi4yvv"/><path class="c9hi2nbvd"/><path class="i2wae2bks"/><path class="yfyldmbax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:browser-multiple-window"} {...others} />);
}

export default Component;
