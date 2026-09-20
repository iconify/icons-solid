import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ubjleoo8i.css';
import '../../css/h/h_0rneb-s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ubjleoo8i"/><path class="h_0rneb-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:camera-duotone"} {...others} />);
}

export default Component;
