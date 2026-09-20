import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ysf8iib-w.css';
import '../../css/p/pb6m-olvp.css';
import '../../css/b/bbrv0_ogo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ysf8iib-w"/><path class="pb6m-olvp"/><path clip-rule="evenodd" class="bbrv0_ogo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:4k-outline"} {...others} />);
}

export default Component;
