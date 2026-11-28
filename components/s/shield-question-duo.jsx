import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qyfsf1tvs.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j2vbli9go.css';
import '../../css/g/g-3b1imef.css';
import '../../css/l/ln33cc_mx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qyfsf1tvs secondary"/><g class="dt0cm9dhy primary"><path class="j2vbli9go"/><path class="g-3b1imef"/><path class="ln33cc_mx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:shield-question-duo"} {...others} />);
}

export default Component;
