import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pa4-7mbfv.css';
import '../../css/p/piuz0fbpu.css';
import '../../css/k/k2hdxcbmm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pa4-7mbfv"/><path class="piuz0fbpu"/><path class="k2hdxcbmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:casaos"} {...others} />);
}

export default Component;
