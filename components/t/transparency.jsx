import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rhc1809ms.css';
import '../../css/p/pz77t9bmc.css';
import '../../css/a/aclgcfbfw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rhc1809ms"/><path class="pz77t9bmc"/><path class="aclgcfbfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:transparency"} {...others} />);
}

export default Component;
