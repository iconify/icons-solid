import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/i/i86ys9byx.css';
import '../../css/y/y2n_micpy.css';
import '../../css/j/je1iedc_r.css';
import '../../css/q/qlqmuob1m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="i86ys9byx"/><path class="y2n_micpy"/><circle class="je1iedc_r"/><path class="qlqmuob1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:warehousing"} {...others} />);
}

export default Component;
