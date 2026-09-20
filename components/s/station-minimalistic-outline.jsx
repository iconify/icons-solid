import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bb0jpsb4k.css';
import '../../css/x/x9i9hmbfe.css';
import '../../css/u/uj3brmbka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bb0jpsb4k"/><path class="x9i9hmbfe"/><path clip-rule="evenodd" class="uj3brmbka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:station-minimalistic-outline"} {...others} />);
}

export default Component;
