import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j53x1ibvg.css';
import '../../css/u/urler8hic.css';
import '../../css/o/o_5pt9b1x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="j53x1ibvg"/><path class="urler8hic"/><path class="o_5pt9b1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:key-square-2-line-duotone"} {...others} />);
}

export default Component;
