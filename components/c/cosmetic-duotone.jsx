import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d333b-bws.css';
import '../../css/w/w0jmmac2d.css';
import '../../css/v/vuviyun2w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="d333b-bws"/><path class="w0jmmac2d"/><path class="vuviyun2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cosmetic-duotone"} {...others} />);
}

export default Component;
