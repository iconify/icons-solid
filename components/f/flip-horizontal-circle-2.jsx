import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qsd-bpmxp.css';
import '../../css/j/jqo9rs4xn.css';
import '../../css/m/murw7l32r.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="qsd-bpmxp"/><path class="jqo9rs4xn"/><path class="murw7l32r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:flip-horizontal-circle-2"} {...others} />);
}

export default Component;
