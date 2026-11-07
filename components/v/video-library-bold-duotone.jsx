import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz8hddabs.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/h/huw4b6big.css';
import '../../css/m/mt3e7vqmm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oz8hddabs"/><g class="xtpeb-edw"><path class="huw4b6big"/><path class="mt3e7vqmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-library-bold-duotone"} {...others} />);
}

export default Component;
