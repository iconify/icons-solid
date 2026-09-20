import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rth2zpu4a.css';
import '../../css/k/kt1i1dx8i.css';
import '../../css/n/nyo6-kbvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rth2zpu4a"/><path class="kt1i1dx8i"/><path class="nyo6-kbvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:layers-three-solid"} {...others} />);
}

export default Component;
