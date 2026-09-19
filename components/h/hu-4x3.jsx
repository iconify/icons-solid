import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k9eh0i04s.css';
import '../../css/v/v18c9fbau.css';
import '../../css/o/ozz7l8b5l.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="d2kvgvbvc"><path class="k9eh0i04s"/><path class="v18c9fbau"/><path class="ozz7l8b5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:hu-4x3"} {...others} />);
}

export default Component;
