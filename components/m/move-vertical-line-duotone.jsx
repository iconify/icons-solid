import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jp1ilnbst.css';
import '../../css/x/x07ftrzei.css';
import '../../css/w/w4qe5y36z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jp1ilnbst"/><path class="x07ftrzei"/><path class="w4qe5y36z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-vertical-line-duotone"} {...others} />);
}

export default Component;
