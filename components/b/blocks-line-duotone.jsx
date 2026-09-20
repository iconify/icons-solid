import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z76hllbql.css';
import '../../css/w/wzzi_ybwn.css';
import '../../css/c/cl5hu-x1l.css';
import '../../css/z/zjt4gb9yw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z76hllbql"/><path class="wzzi_ybwn"/><path class="cl5hu-x1l"/><path class="zjt4gb9yw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:blocks-line-duotone"} {...others} />);
}

export default Component;
