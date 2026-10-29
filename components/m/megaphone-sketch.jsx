import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v3c0odnjd.css';
import '../../css/g/gwpevo8qp.css';
import '../../css/o/o0m_us_lw.css';
import '../../css/r/rqi-mcbpo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="v3c0odnjd"/><path class="gwpevo8qp wm-k"/><path class="o0m_us_lw wm-k"/><path class="rqi-mcbpo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:megaphone-sketch"} {...others} />);
}

export default Component;
