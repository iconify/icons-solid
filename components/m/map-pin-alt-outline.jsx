import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rwzi9g3uh.css';
import '../../css/t/t8kx8rbzi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rwzi9g3uh"/><path class="t8kx8rbzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:map-pin-alt-outline"} {...others} />);
}

export default Component;
