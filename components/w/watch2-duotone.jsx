import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l-xzcc5xq.css';
import '../../css/n/n0vt6rb9h.css';
import '../../css/r/r8sdn9_ku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l-xzcc5xq"/><path class="n0vt6rb9h"/><path clip-rule="evenodd" class="r8sdn9_ku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:watch2-duotone"} {...others} />);
}

export default Component;
