import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rd8811bxn.css';
import '../../css/e/epypr2biz.css';
import '../../css/z/z0lq_8ybi.css';
import '../../css/x/xowv5xdgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="rd8811bxn"/><rect class="epypr2biz"/><path class="z0lq_8ybi"/><path class="xowv5xdgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:calendar-dot"} {...others} />);
}

export default Component;
