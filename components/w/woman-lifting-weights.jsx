import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/belzigh4o.css';
import '../../css/k/ktbj5idbh.css';
import '../../css/g/gennyabnn.css';
import '../../css/k/k3cx2pb6d.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="belzigh4o"/><path class="ktbj5idbh"/><path class="gennyabnn"/><path class="k3cx2pb6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-lifting-weights"} {...others} />);
}

export default Component;
