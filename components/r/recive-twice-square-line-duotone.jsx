import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vw_7vf50q.css';
import '../../css/z/zjjwdmb_w.css';
import '../../css/v/va-3p8pyw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vw_7vf50q"/><path class="zjjwdmb_w"/><path class="va-3p8pyw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:recive-twice-square-line-duotone"} {...others} />);
}

export default Component;
