import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m7jidabhn.css';
import '../../css/k/k7ytdwb6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m7jidabhn"/><path class="k7ytdwb6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:strikethrough-duotone"} {...others} />);
}

export default Component;
