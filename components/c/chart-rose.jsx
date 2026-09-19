import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/ltax0actb.css';
import '../../css/c/cib29ybfv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ltax0actb"/><path class="cib29ybfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chart-rose"} {...others} />);
}

export default Component;
