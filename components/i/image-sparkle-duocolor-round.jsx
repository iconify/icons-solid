import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dzls5_m7x.css';
import '../../css/g/gqa7vck7h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dzls5_m7x"/><path class="gqa7vck7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:image-sparkle-duocolor-round"} {...others} />);
}

export default Component;
