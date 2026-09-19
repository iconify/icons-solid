import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/lz3bvumyc.css';
import '../../css/i/i51s6__iq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="lz3bvumyc"/><circle class="i51s6__iq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:camera-outline"} {...others} />);
}

export default Component;
