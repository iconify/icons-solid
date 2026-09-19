import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cbcpypbby.css';
import '../../css/x/xi28nxida.css';
import '../../css/r/rnrq--cdp.css';
import '../../css/j/jx8wicb2x.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="cbcpypbby"/><path class="xi28nxida"/><path class="rnrq--cdp"/><path class="jx8wicb2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-rowing-boat"} {...others} />);
}

export default Component;
