import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rwzi9g3uh.css';
import '../../css/g/gdnh5ac-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rwzi9g3uh"/><path class="gdnh5ac-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:map-location-outline"} {...others} />);
}

export default Component;
