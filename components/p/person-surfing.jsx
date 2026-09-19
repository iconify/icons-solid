import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sw4ggjusk.css';
import '../../css/z/z-76k5bbg.css';
import '../../css/v/v-nd48wyt.css';
import '../../css/e/eoer0xs2e.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="sw4ggjusk"/><path class="z-76k5bbg"/><path class="v-nd48wyt"/><path class="eoer0xs2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-surfing"} {...others} />);
}

export default Component;
