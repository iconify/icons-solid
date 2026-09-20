import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/etm_13gxh.css';
import '../../css/j/jvc0x--az.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="etm_13gxh"/><path clip-rule="evenodd" class="jvc0x--az"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:comment-plus"} {...others} />);
}

export default Component;
