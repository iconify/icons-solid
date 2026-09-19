import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zz-vrfbbr.css';
import '../../css/l/lxgj4lb0m.css';
import '../../css/s/s13nlbcmv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="zz-vrfbbr"/><path class="lxgj4lb0m"/><path class="s13nlbcmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman"} {...others} />);
}

export default Component;
