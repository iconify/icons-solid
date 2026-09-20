import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/u/u7jfl27dd.css';
import '../../css/p/pdrfcibwx.css';
import '../../css/y/y0c_1hvug.css';
import '../../css/g/gihdadvlo.css';
import '../../css/h/hwhvr_yzx.css';
import '../../css/e/e1c20-15y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="u7jfl27dd"/><path class="pdrfcibwx"/><path class="y0c_1hvug"/><path class="gihdadvlo"/><path class="hwhvr_yzx"/><path class="e1c20-15y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:sea"} {...others} />);
}

export default Component;
