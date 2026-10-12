import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j3_k57lwk.css';
import '../../css/e/e_9kbi40m.css';
import '../../css/k/k_my9vu2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j3_k57lwk"/><path class="e_9kbi40m"/><path class="k_my9vu2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bike-duotone"} {...others} />);
}

export default Component;
