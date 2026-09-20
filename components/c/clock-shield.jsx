import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e0w2og_wj.css';
import '../../css/h/hib1y0aos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e0w2og_wj"/><path class="hib1y0aos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-shield"} {...others} />);
}

export default Component;
