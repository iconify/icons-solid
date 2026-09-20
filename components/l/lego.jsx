import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf5rwx65l.css';
import '../../css/d/d0d0ko1nq.css';
import '../../css/n/nnc9b285l.css';
import '../../css/m/mziiijuxo.css';
import '../../css/j/j4a5z979b.css';
import '../../css/n/nksthvbor.css';

const viewBox = {"width":180,"height":180};
const content = `<g class="yf5rwx65l"><path class="d0d0ko1nq"/><path clip-rule="evenodd" class="nnc9b285l"/><path clip-rule="evenodd" class="mziiijuxo"/><path clip-rule="evenodd" class="j4a5z979b"/><path clip-rule="evenodd" class="nksthvbor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:lego"} {...others} />);
}

export default Component;
