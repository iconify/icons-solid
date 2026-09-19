import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tuusgtd7z.css';
import '../../css/k/k65f556lz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="tuusgtd7z"/><path class="k65f556lz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:flamingo"} {...others} />);
}

export default Component;
