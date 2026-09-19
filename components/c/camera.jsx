import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ntn844azb.css';
import '../../css/y/ymca-t65m.css';
import '../../css/l/lbpc0voao.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="ntn844azb"/><path class="ymca-t65m"/><path class="lbpc0voao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:camera"} {...others} />);
}

export default Component;
