import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yncrqfcru.css';
import '../../css/y/ymqi1-bqp.css';
import '../../css/q/qkzx3-bvi.css';
import '../../css/m/mgnyrhbia.css';
import '../../css/z/zacj-3fii.css';
import '../../css/q/q6h5qf-el.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><ellipse class="yncrqfcru"/><circle class="ymqi1-bqp"/><circle class="qkzx3-bvi"/><circle class="mgnyrhbia"/><path class="zacj-3fii"/><path class="q6h5qf-el"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rabbit"} {...others} />);
}

export default Component;
