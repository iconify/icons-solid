import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g7gekvbgt.css';
import '../../css/m/m1ojwtb1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g7gekvbgt"/><path class="m1ojwtb1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:map-pin-heart-two-tone"} {...others} />);
}

export default Component;
