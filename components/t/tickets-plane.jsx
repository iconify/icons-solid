import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lpusqwbwb.css';
import '../../css/n/nagqqvblc.css';
import '../../css/n/nj4w60bmc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lpusqwbwb"/><path class="nagqqvblc"/><path class="nj4w60bmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tickets-plane"} {...others} />);
}

export default Component;
