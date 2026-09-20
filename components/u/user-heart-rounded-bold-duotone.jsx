import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o41vq3ozh.css';
import '../../css/c/c_zdt_bqs.css';
import '../../css/v/vcx3fkrll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="o41vq3ozh"/><path class="c_zdt_bqs"/><path class="vcx3fkrll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-heart-rounded-bold-duotone"} {...others} />);
}

export default Component;
