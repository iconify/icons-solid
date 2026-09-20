import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d3g6babwz.css';
import '../../css/v/v-3-4obmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d3g6babwz"/><path class="v-3-4obmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:watch-two-tone"} {...others} />);
}

export default Component;
