import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qyxnrua8b.css';
import '../../css/v/vxclh00uk.css';
import '../../css/s/so_2km93v.css';
import '../../css/v/v09hq4bgz.css';
import '../../css/b/b1mn12bfd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qyxnrua8b"/><path class="vxclh00uk"/><path class="so_2km93v"/><path class="v09hq4bgz"/><path clip-rule="evenodd" class="b1mn12bfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-square-outline"} {...others} />);
}

export default Component;
