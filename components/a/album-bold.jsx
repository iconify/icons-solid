import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kntji4pqg.css';
import '../../css/e/e8i5ctbbw.css';
import '../../css/x/xo8rjg3rh.css';
import '../../css/x/xw_tiwbov.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kntji4pqg"/><path clip-rule="evenodd" class="e8i5ctbbw"/><path class="xo8rjg3rh"/><path class="xw_tiwbov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:album-bold"} {...others} />);
}

export default Component;
