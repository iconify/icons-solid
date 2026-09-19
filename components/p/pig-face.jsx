import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w-zixeffg.css';
import '../../css/u/uj0x553mk.css';
import '../../css/q/q0ji2gvpn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="w-zixeffg"/><path class="uj0x553mk"/><path class="q0ji2gvpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:pig-face"} {...others} />);
}

export default Component;
