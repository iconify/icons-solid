import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r94-t1kxh.css';
import '../../css/y/y20odkblc.css';
import '../../css/w/we5qrrs3s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r94-t1kxh"/><path class="y20odkblc"/><path class="we5qrrs3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:closet-2-bold-duotone"} {...others} />);
}

export default Component;
