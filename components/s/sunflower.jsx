import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/au147rbej.css';
import '../../css/v/vp3486b-o.css';
import '../../css/s/sbx5ivbwj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="au147rbej"/><path class="vp3486b-o"/><path class="sbx5ivbwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:sunflower"} {...others} />);
}

export default Component;
