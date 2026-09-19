import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ed0pqxdzw.css';
import '../../css/j/jolt8cvri.css';
import '../../css/i/ilyiwztto.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="ed0pqxdzw"/><path class="jolt8cvri"/><path class="ilyiwztto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:camera-reels"} {...others} />);
}

export default Component;
