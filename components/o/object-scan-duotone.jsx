import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ctv62h6ha.css';
import '../../css/p/pqk1-ii7r.css';
import '../../css/s/sr9403stc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ctv62h6ha"/><path class="pqk1-ii7r"/><path class="sr9403stc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:object-scan-duotone"} {...others} />);
}

export default Component;
