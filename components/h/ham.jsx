import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dhy5bs5ug.css';
import '../../css/l/l8kswp8ey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dhy5bs5ug"/><path class="l8kswp8ey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:ham"} {...others} />);
}

export default Component;
