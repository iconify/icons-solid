import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qy08_wu9m.css';
import '../../css/y/y7i7dktoe.css';
import '../../css/h/h5znycccm.css';
import '../../css/w/w65uqpbul.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="qy08_wu9m"/><path class="y7i7dktoe"/><path class="h5znycccm"/><path class="w65uqpbul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:dango"} {...others} />);
}

export default Component;
