import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/j/j91vxv8id.css';
import '../../css/v/vgqf9ebff.css';
import '../../css/h/hjpx-0bmo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="j91vxv8id"/><path class="vgqf9ebff"/><path class="hjpx-0bmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:paper-bitcoin-outline"} {...others} />);
}

export default Component;
