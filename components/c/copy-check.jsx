import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/utxthgb7m.css';
import '../../css/c/cj9qe-bak.css';
import '../../css/i/irhy_8bsp.css';
import '../../css/v/vg8j3tbje.css';
import '../../css/z/zutyk-bxl.css';
import '../../css/j/jvdi11bid.css';
import '../../css/z/zz-2wsbqw.css';
import '../../css/g/go-6ws08v.css';
import '../../css/n/nl6gm2dhr.css';
import '../../css/k/kn-1y6pge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="utxthgb7m wm-shadow"/><path class="cj9qe-bak"/><path class="irhy_8bsp"/><path class="vg8j3tbje"/><path class="zutyk-bxl"/><path class="jvdi11bid wm-shine"/><path class="wm-s zz-2wsbqw"/><path class="go-6ws08v wm-s"/><path class="nl6gm2dhr wm-s"/><path class="kn-1y6pge wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:copy-check"} {...others} />);
}

export default Component;
