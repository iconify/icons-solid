import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/frhk_0b0z.css';
import '../../css/x/xnr-7ue_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="frhk_0b0z"/><rect class="xnr-7ue_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:image-upscale"} {...others} />);
}

export default Component;
