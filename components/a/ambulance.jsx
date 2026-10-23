import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/o/o1wxqeirx.css';
import '../../css/y/y2b366bnn.css';
import '../../css/y/yuoclsbbx.css';
import '../../css/x/xlz0rtbuz.css';
import '../../css/b/b37zg8ubh.css';
import '../../css/n/n2dw57bmq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="o1wxqeirx"/><path class="y2b366bnn"/><path class="yuoclsbbx"/><path class="xlz0rtbuz"/><path class="b37zg8ubh"/><path class="n2dw57bmq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:ambulance"} {...others} />);
}

export default Component;
