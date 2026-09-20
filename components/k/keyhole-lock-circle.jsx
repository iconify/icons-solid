import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qlg8tl7wx.css';
import '../../css/k/kshof5b-l.css';
import '../../css/x/xjfc-xbtr.css';
import '../../css/q/qn-u0acto.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qlg8tl7wx"/><path class="kshof5b-l"/><path class="xjfc-xbtr"/><path class="qn-u0acto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:keyhole-lock-circle"} {...others} />);
}

export default Component;
