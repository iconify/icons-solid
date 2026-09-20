import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ihohqvbwa.css';
import '../../css/v/vb2fm7crz.css';

const viewBox = {"width":25,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ihohqvbwa"/><path class="vb2fm7crz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:wifi"} {...others} />);
}

export default Component;
