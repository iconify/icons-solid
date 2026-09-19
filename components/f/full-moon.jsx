import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ywpk43bnk.css';
import '../../css/c/cecep-m5k.css';
import '../../css/m/mb4qco5la.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ywpk43bnk"/><path class="cecep-m5k"/><path class="mb4qco5la"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:full-moon"} {...others} />);
}

export default Component;
