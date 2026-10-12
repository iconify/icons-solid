import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8t-nlb-y.css';
import '../../css/k/k5gnh_wwp.css';
import '../../css/j/j1_waebmq.css';
import '../../css/f/f08_6jbtp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h8t-nlb-y"/><path class="k5gnh_wwp"/><path class="j1_waebmq"/><path class="f08_6jbtp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hand"} {...others} />);
}

export default Component;
