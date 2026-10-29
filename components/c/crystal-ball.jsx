import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cp33x2had.css';
import '../../css/z/z91nmccdk.css';
import '../../css/h/h-yueub9x.css';
import '../../css/d/d1o569f1o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="cp33x2had wm-k"/><path class="wm-s z91nmccdk"/><path class="h-yueub9x"/><path class="d1o569f1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:crystal-ball"} {...others} />);
}

export default Component;
