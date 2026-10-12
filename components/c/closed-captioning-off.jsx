import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qs6t5b54u.css';
import '../../css/n/nyxigacnc.css';
import '../../css/c/ck6qbbgji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="qs6t5b54u"/><rect class="nyxigacnc"/><path class="ck6qbbgji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:closed-captioning-off"} {...others} />);
}

export default Component;
