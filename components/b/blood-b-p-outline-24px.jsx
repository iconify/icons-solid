import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d6mo-un_y.css';
import '../../css/s/so_z8yfrn.css';
import '../../css/z/zy-whpb0x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d6mo-un_y"/><path class="so_z8yfrn"/><path clip-rule="evenodd" class="zy-whpb0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-b-p-outline-24px"} {...others} />);
}

export default Component;
