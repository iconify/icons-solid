import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/me4q-ebmf.css';
import '../../css/q/qzizn-7aq.css';
import '../../css/m/mwfsecbre.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="me4q-ebmf"/><path class="qzizn-7aq"/><path class="mwfsecbre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-with-white-cane"} {...others} />);
}

export default Component;
