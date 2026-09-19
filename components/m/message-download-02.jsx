import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/swr2ivblh.css';
import '../../css/n/nv03q_b1d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="swr2ivblh"/><path class="nv03q_b1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-download-02"} {...others} />);
}

export default Component;
