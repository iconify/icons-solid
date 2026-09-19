import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/da1w8zewh.css';
import '../../css/p/pm-3j_yfg.css';
import '../../css/y/yer1a2olk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="da1w8zewh"/><path clip-rule="evenodd" class="pm-3j_yfg"/><path class="yer1a2olk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-rh-p-outline-24px"} {...others} />);
}

export default Component;
