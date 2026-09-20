import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u52ozydly.css';
import '../../css/k/koglfgaqy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u52ozydly"/><path class="koglfgaqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:smartphone-arrow-in-up-right-two-tone"} {...others} />);
}

export default Component;
