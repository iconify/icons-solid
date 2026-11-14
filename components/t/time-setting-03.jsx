import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lsa_vml7w.css';
import '../../css/x/xyaurorxt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="lsa_vml7w"/><path class="xyaurorxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:time-setting-03"} {...others} />);
}

export default Component;
