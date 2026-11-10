import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sr28_0vuq.css';
import '../../css/w/wo5nanh_o.css';
import '../../css/s/stbp-zbzm.css';
import '../../css/o/ohiy_9w1k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sr28_0vuq"/><path class="wo5nanh_o"/><path class="stbp-zbzm"/><path class="ohiy_9w1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:calendar-edit"} {...others} />);
}

export default Component;
