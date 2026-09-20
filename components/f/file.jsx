import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s0_g53b0m.css';
import '../../css/a/azeq84zvv.css';
import '../../css/m/mponw-bea.css';
import '../../css/a/a07ya4bgw.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="s0_g53b0m"/><path class="azeq84zvv"/><path clip-rule="evenodd" class="mponw-bea"/><path class="a07ya4bgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:file"} {...others} />);
}

export default Component;
