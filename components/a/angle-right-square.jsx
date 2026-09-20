import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/haututbcq.css';
import '../../css/b/bdk_c1bht.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="haututbcq"/><path clip-rule="evenodd" class="bdk_c1bht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:angle-right-square"} {...others} />);
}

export default Component;
