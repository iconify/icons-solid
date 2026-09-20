import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lynb7gb5s.css';
import '../../css/e/ei9w4bc3h.css';
import '../../css/t/tbgu7rb4e.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="bi12bsetm"><path class="lynb7gb5s"/><path class="ei9w4bc3h"/><path class="tbgu7rb4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:tv-mode"} {...others} />);
}

export default Component;
