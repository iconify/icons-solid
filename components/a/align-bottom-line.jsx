import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jkuojibnm.css';
import '../../css/n/ncpylf9as.css';
import '../../css/k/krp1_7ygc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jkuojibnm"/><rect transform="rotate(-90 6 17)" class="ncpylf9as"/><rect transform="rotate(-90 14 17)" class="krp1_7ygc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:align-bottom-line"} {...others} />);
}

export default Component;
