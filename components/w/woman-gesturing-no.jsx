import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gmq0ucb6h.css';
import '../../css/e/eiq6_bomh.css';
import '../../css/z/zicbo7bwd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="gmq0ucb6h"/><path class="eiq6_bomh"/><path class="zicbo7bwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-gesturing-no"} {...others} />);
}

export default Component;
