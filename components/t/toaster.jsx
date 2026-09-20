import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/e94ilzbar.css';
import '../../css/o/os6ewozhp.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="e94ilzbar"/><path class="os6ewozhp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:toaster"} {...others} />);
}

export default Component;
