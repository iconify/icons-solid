import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/newhisb0x.css';
import '../../css/l/lvop58bqi.css';
import '../../css/s/s0m_fy--i.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="cuyn6tgcc"><path class="newhisb0x"/><path class="lvop58bqi"/><path class="s0m_fy--i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:assign"} {...others} />);
}

export default Component;
