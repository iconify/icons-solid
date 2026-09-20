import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/v/vl62orbzq.css';
import '../../css/y/y7ca-5l_i.css';
import '../../css/s/suur1dntm.css';
import '../../css/c/cq12y0bxr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="vl62orbzq"/><path class="y7ca-5l_i"/><path class="suur1dntm"/><path class="cq12y0bxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:desktop-screensaver-sleep"} {...others} />);
}

export default Component;
