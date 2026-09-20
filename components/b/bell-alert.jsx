import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rvw1gjbmf.css';
import '../../css/y/y5tcy_bsg.css';
import '../../css/i/i_ybz0bjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rvw1gjbmf"/><path clip-rule="evenodd" class="y5tcy_bsg"/><path class="i_ybz0bjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bell-alert"} {...others} />);
}

export default Component;
