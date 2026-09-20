import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rpia5zilk.css';
import '../../css/f/fw9f_lb8d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rpia5zilk"/><path class="fw9f_lb8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sliders-horizontal-two-tone"} {...others} />);
}

export default Component;
