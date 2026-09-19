import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/znc_k639x.css';
import '../../css/k/k4ftlkben.css';
import '../../css/k/ko5gow_dd.css';
import '../../css/f/f7kgbwb1g.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="d2kvgvbvc"><path class="znc_k639x"/><path class="k4ftlkben"/><path class="ko5gow_dd"/><path class="f7kgbwb1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:mu-4x3"} {...others} />);
}

export default Component;
