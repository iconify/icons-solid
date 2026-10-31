import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ar4p7fb_d.css';
import '../../css/l/l6paavbvb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ar4p7fb_d"/><path class="l6paavbvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:octagon-info-duocolor-round"} {...others} />);
}

export default Component;
