import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n79eovbth.css';
import '../../css/l/ltt8_ib4h.css';
import '../../css/t/t5jksacui.css';
import '../../css/a/anhsc6r_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n79eovbth"/><path class="ltt8_ib4h"/><path class="t5jksacui"/><path class="anhsc6r_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bucket"} {...others} />);
}

export default Component;
