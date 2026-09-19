import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l0zqf2r-a.css';
import '../../css/p/pdihomkie.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="l0zqf2r-a"/><path class="pdihomkie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:cow-face"} {...others} />);
}

export default Component;
