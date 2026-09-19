import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ejy0znw5p.css';
import '../../css/j/joz9_qbjc.css';
import '../../css/y/yfe32hksy.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="ejy0znw5p"/><path class="joz9_qbjc"/><path class="yfe32hksy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:construction-worker"} {...others} />);
}

export default Component;
