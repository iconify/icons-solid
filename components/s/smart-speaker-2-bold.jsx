import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yrkzeibqe.css';
import '../../css/c/cde919bvv.css';
import '../../css/w/wrkfp4ybw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yrkzeibqe"/><path class="cde919bvv"/><path class="wrkfp4ybw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-speaker-2-bold"} {...others} />);
}

export default Component;
