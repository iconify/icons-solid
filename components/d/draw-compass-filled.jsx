import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rp-rncc0y.css';
import '../../css/m/mt58vcclw.css';
import '../../css/h/h_mjq-bfb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rp-rncc0y"/><path class="mt58vcclw"/><path clip-rule="evenodd" class="h_mjq-bfb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:draw-compass-filled"} {...others} />);
}

export default Component;
