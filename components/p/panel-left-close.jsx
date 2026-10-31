import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cxkdptkzq.css';
import '../../css/t/tnigif0da.css';
import '../../css/e/el_5jhvci.css';
import '../../css/u/u-km2mbci.css';
import '../../css/d/d3q7jdtbg.css';
import '../../css/v/v34-sj-nm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="cxkdptkzq wm-shadow"/><path class="tnigif0da"/><path class="el_5jhvci"/><path class="u-km2mbci"/><path class="d3q7jdtbg"/><path class="v34-sj-nm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:panel-left-close"} {...others} />);
}

export default Component;
