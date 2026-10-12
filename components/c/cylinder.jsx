import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jdbi92bbi.css';
import '../../css/t/tlktr-bfg.css';
import '../../css/w/wg2czsbqp.css';
import '../../css/p/pr8a3ac2n.css';
import '../../css/v/vv_e7_ohc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse transform="rotate(90 12 3.88)" class="jdbi92bbi"/><ellipse transform="rotate(90 12 19.77)" class="tlktr-bfg"/><path class="wg2czsbqp"/><ellipse transform="rotate(90 12 3.68)" class="pr8a3ac2n"/><ellipse transform="rotate(90 12 19.77)" class="vv_e7_ohc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cylinder"} {...others} />);
}

export default Component;
