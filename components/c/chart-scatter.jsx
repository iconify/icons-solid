import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/ht33iebbd.css';
import '../../css/a/amgmjwbpp.css';
import '../../css/v/vv2lcdc9v.css';
import '../../css/r/rxq36ib2y.css';
import '../../css/v/vad7srb1g.css';
import '../../css/o/osdr9610d.css';
import '../../css/u/u3ep4j9ur.css';
import '../../css/i/ip6602bct.css';
import '../../css/i/iqhjyybzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ht33iebbd wm-shadow"/><path class="amgmjwbpp"/><path class="vv2lcdc9v"/><path class="rxq36ib2y"/><path class="vad7srb1g"/><path class="osdr9610d"/><path class="u3ep4j9ur wm-shine"/><path class="ip6602bct wm-deco"/><path class="iqhjyybzt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:chart-scatter"} {...others} />);
}

export default Component;
