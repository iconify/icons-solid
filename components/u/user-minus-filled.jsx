import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-8jrx5yq.css';
import '../../css/k/k7o8k720p.css';
import '../../css/d/dtl23o_xq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u-8jrx5yq"/><path class="k7o8k720p"/><circle class="dtl23o_xq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:user-minus-filled"} {...others} />);
}

export default Component;
