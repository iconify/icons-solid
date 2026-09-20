import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fpm4c09pq.css';
import '../../css/t/tqdd8nb1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fpm4c09pq"/><path class="tqdd8nb1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-pyramid-duotone"} {...others} />);
}

export default Component;
