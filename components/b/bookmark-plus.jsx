import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nzdt2o4py.css';
import '../../css/c/ctyrskm2h.css';
import '../../css/o/oixudw5qi.css';
import '../../css/l/lg1f1q9nq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="nzdt2o4py wm-shadow"/><path class="ctyrskm2h wm-shadow"/><path class="oixudw5qi"/><path class="lg1f1q9nq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:bookmark-plus"} {...others} />);
}

export default Component;
