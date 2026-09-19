import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pgiehtb6o.css';
import '../../css/z/z4lh7jbjg.css';
import '../../css/s/sagau8e7p.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="pgiehtb6o"/><path class="z4lh7jbjg"/><path class="sagau8e7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-firefighter"} {...others} />);
}

export default Component;
