import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mju-o0bov.css';
import '../../css/z/zuax7pdxr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mju-o0bov wm-k"/><path class="wm-a zuax7pdxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-graph-sketch"} {...others} />);
}

export default Component;
