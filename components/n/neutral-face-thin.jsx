import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/r/r1zv4vbmm.css';
import '../../css/r/rsjsrjd2a.css';
import '../../css/l/lwa-rvbps.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="r1zv4vbmm"/><path class="rsjsrjd2a"/><path class="lwa-rvbps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:neutral-face-thin"} {...others} />);
}

export default Component;
