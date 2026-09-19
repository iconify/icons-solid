import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/simk7bbem.css';
import '../../css/m/m03kxbbvv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="simk7bbem"/><path class="m03kxbbvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-facepalming"} {...others} />);
}

export default Component;
