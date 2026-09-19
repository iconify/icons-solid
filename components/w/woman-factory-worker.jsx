import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u8so7faom.css';
import '../../css/b/bjk1z5bsp.css';
import '../../css/l/l4miem7lt.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="u8so7faom"/><path class="bjk1z5bsp"/><path class="l4miem7lt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-factory-worker"} {...others} />);
}

export default Component;
