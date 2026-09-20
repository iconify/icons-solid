import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aw9ln9brz.css';
import '../../css/g/gmg2hcb-r.css';
import '../../css/x/x5-ac1bzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="aw9ln9brz"/><path class="gmg2hcb-r"/><path clip-rule="evenodd" class="x5-ac1bzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:donut-bold"} {...others} />);
}

export default Component;
