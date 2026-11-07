import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h477q4bel.css';
import '../../css/y/yh6hz8b9k.css';
import '../../css/o/o7cgxubkk.css';
import '../../css/e/er-qp_bxv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="h477q4bel"/><path class="yh6hz8b9k"/><circle class="o7cgxubkk"/><path class="er-qp_bxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:album-line-duotone"} {...others} />);
}

export default Component;
