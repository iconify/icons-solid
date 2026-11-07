import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7cgpkozd.css';
import '../../css/p/phhpx_u6x.css';
import '../../css/y/ysaow14pl.css';
import '../../css/d/d7-qycd0c.css';
import '../../css/v/vk8pb18_w.css';
import '../../css/v/v3tvhri0i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d7cgpkozd"/><path class="phhpx_u6x"/><path class="ysaow14pl"/><path class="d7-qycd0c"/><path class="vk8pb18_w"/><path clip-rule="evenodd" class="v3tvhri0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:facemask-square-bold"} {...others} />);
}

export default Component;
