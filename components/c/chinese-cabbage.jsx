import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lsmjvib5p.css';
import '../../css/o/o7n3n0zde.css';
import '../../css/e/e43x9kbpz.css';
import '../../css/f/fibzt4t-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lsmjvib5p"/><path class="o7n3n0zde"/><path class="e43x9kbpz"/><path class="fibzt4t-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chinese-cabbage"} {...others} />);
}

export default Component;
