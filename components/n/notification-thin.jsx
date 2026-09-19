import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/zqf_yl-im.css';
import '../../css/u/umzj1472b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="zqf_yl-im"/><circle class="umzj1472b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:notification-thin"} {...others} />);
}

export default Component;
