import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l8jiedbhu.css';
import '../../css/w/wl18s4brm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l8jiedbhu"/><path class="wl18s4brm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:credit-card-sparkles"} {...others} />);
}

export default Component;
