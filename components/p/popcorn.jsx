import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wzsz66bth.css';
import '../../css/i/iqms-w39y.css';
import '../../css/h/he5xhtbxt.css';
import '../../css/e/e05puib_q.css';
import '../../css/i/i93fm0biq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="wzsz66bth"/><path class="iqms-w39y"/><path class="he5xhtbxt"/><path class="e05puib_q"/><path class="i93fm0biq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:popcorn"} {...others} />);
}

export default Component;
