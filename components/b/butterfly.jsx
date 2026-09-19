import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/voiff7u-m.css';
import '../../css/l/lzbkb10sy.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="voiff7u-m"/><path class="lzbkb10sy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:butterfly"} {...others} />);
}

export default Component;
