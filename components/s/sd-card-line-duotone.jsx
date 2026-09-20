import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/orqtdgb5k.css';
import '../../css/t/tylu5nb4d.css';
import '../../css/g/gkiwa1bxg.css';
import '../../css/o/o5oealbwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="orqtdgb5k"/><path class="tylu5nb4d"/><path class="gkiwa1bxg"/><path class="o5oealbwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sd-card-line-duotone"} {...others} />);
}

export default Component;
