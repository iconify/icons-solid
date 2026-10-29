import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f1b9shfss.css';
import '../../css/z/zomf0k0wi.css';
import '../../css/l/l94wqzpmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f1b9shfss wm-k"/><path class="wm-k zomf0k0wi"/><path class="l94wqzpmb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-checks-sketch"} {...others} />);
}

export default Component;
