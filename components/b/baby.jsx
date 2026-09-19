import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ymumlibff.css';
import '../../css/i/iq0eetl8w.css';
import '../../css/c/cxmaafbfw.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="ymumlibff"/><path class="iq0eetl8w"/><path class="cxmaafbfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:baby"} {...others} />);
}

export default Component;
