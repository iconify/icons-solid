import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tw4q3xupv.css';
import '../../css/d/dg2jromme.css';
import '../../css/k/kwopvubne.css';
import '../../css/e/es2aojbzy.css';
import '../../css/e/eal8h4bwj.css';
import '../../css/r/r9bxfyb_n.css';
import '../../css/f/fc3gt2h5y.css';
import '../../css/w/wdphd8b3t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="tw4q3xupv wm-shadow"/><path class="dg2jromme"/><path class="kwopvubne"/><path class="es2aojbzy"/><path class="eal8h4bwj"/><path class="r9bxfyb_n"/><path class="fc3gt2h5y"/><path class="wdphd8b3t wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:chart-bar-horizontal"} {...others} />);
}

export default Component;
