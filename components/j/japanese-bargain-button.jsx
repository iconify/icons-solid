import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nq99_rblr.css';
import '../../css/e/ekdr8lv2x.css';
import '../../css/b/bt58twbca.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="nq99_rblr"/><path class="ekdr8lv2x"/><path class="bt58twbca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:japanese-bargain-button"} {...others} />);
}

export default Component;
