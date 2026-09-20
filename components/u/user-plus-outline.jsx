import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/ha3f25bxe.css';
import '../../css/i/iksb9rpzr.css';
import '../../css/n/n13mhtbfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ha3f25bxe"/><path class="iksb9rpzr"/><path clip-rule="evenodd" class="n13mhtbfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-plus-outline"} {...others} />);
}

export default Component;
