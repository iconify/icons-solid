import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w-e4o0nkk.css';
import '../../css/u/u5chd_wam.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="w-e4o0nkk"/><path class="u5chd_wam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-guard"} {...others} />);
}

export default Component;
