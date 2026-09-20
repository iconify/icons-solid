import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j6fyqsbqx.css';
import '../../css/x/xs2r8ub4x.css';
import '../../css/w/wunicfbjz.css';
import '../../css/m/mv6x3rb2e.css';
import '../../css/r/r73xclohw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="j6fyqsbqx"/><path class="xs2r8ub4x"/><path class="wunicfbjz"/><path class="mv6x3rb2e"/><path class="r73xclohw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:browser-bookmark"} {...others} />);
}

export default Component;
