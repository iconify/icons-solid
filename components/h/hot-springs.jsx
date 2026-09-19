import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ndhqwbchl.css';
import '../../css/n/n2fu9lbse.css';
import '../../css/n/n5qmy1psg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="ndhqwbchl"/><path class="n2fu9lbse"/><path class="n5qmy1psg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:hot-springs"} {...others} />);
}

export default Component;
