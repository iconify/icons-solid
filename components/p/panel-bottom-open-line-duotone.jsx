import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cex3mhxbq.css';
import '../../css/v/v_xbae9wh.css';
import '../../css/l/l_g5nnb8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="cex3mhxbq"/><path class="v_xbae9wh"/><path class="l_g5nnb8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-bottom-open-line-duotone"} {...others} />);
}

export default Component;
