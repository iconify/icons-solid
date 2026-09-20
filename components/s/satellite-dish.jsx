import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l16ez9l5b.css';
import '../../css/x/xscrq6bvx.css';
import '../../css/t/t02gyh2bc.css';
import '../../css/z/zz0c21b1y.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="l16ez9l5b"/><path class="xscrq6bvx"/><path class="t02gyh2bc"/><path class="zz0c21b1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:satellite-dish"} {...others} />);
}

export default Component;
