import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aotqa7b0q.css';
import '../../css/g/gqqdycb-o.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="aotqa7b0q"/><path class="gqqdycb-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:cloud-with-rain"} {...others} />);
}

export default Component;
