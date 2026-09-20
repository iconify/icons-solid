import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j_g3vebat.css';
import '../../css/d/dpdbd3bze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j_g3vebat"/><path class="dpdbd3bze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:map-pin-off"} {...others} />);
}

export default Component;
