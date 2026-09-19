import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qu02hzsxt.css';
import '../../css/z/zq2isibxa.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="qu02hzsxt"/><path class="zq2isibxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:ferry"} {...others} />);
}

export default Component;
