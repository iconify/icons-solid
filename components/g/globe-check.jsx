import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nf_26ccon.css';
import '../../css/f/fb_t30skq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nf_26ccon"/><path class="fb_t30skq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:globe-check"} {...others} />);
}

export default Component;
