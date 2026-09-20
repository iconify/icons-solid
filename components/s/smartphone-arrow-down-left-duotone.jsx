import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u52ozydly.css';
import '../../css/w/w_e4tyv6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u52ozydly"/><path class="w_e4tyv6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:smartphone-arrow-down-left-duotone"} {...others} />);
}

export default Component;
