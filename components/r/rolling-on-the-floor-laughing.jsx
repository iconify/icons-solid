import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s9bslbb3p.css';
import '../../css/y/ycwep1_0p.css';
import '../../css/l/l2e84ghie.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="s9bslbb3p"/><path class="ycwep1_0p"/><path class="l2e84ghie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:rolling-on-the-floor-laughing"} {...others} />);
}

export default Component;
