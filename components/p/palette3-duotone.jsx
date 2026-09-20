import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iy4qule-o.css';
import '../../css/d/dvisw9zgk.css';
import '../../css/q/qthixtbrg.css';
import '../../css/u/uysb_grfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="iy4qule-o"/><path class="dvisw9zgk"/><path class="qthixtbrg"/><path class="uysb_grfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:palette3-duotone"} {...others} />);
}

export default Component;
