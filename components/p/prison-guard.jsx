import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y1qnj5-tg.css';
import '../../css/j/jo3mazmao.css';
import '../../css/m/mnnnnrphu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="y1qnj5-tg"/><path class="jo3mazmao"/><path class="mnnnnrphu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:prison-guard"} {...others} />);
}

export default Component;
