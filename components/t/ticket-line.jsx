import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/q/qcd_u_w0l.css';
import '../../css/d/dork1d00k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="qcd_u_w0l"/><path class="dork1d00k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:ticket-line"} {...others} />);
}

export default Component;
