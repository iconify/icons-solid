import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s-r07ybor.css';
import '../../css/e/es3nxrjhb.css';
import '../../css/k/kxymku63g.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="s-r07ybor"/><path class="es3nxrjhb"/><path class="kxymku63g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-factory-worker"} {...others} />);
}

export default Component;
