import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vjxagrjwy.css';
import '../../css/c/co82vs2aq.css';
import '../../css/p/pljpiabkb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vjxagrjwy wm-k"/><path class="co82vs2aq wm-k"/><path class="pljpiabkb wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:circle-dashed"} {...others} />);
}

export default Component;
