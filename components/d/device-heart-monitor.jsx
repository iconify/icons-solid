import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pi8645b3h.css';
import '../../css/k/kh26t59fj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pi8645b3h"/><path class="kh26t59fj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-heart-monitor"} {...others} />);
}

export default Component;
