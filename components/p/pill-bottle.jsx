import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/oqamne5gv.css';
import '../../css/s/s3vwoh_yq.css';
import '../../css/w/w0lnjhbxr.css';
import '../../css/w/wclxpe_ot.css';
import '../../css/e/e1j8snb_m.css';
import '../../css/r/ru_iehh2g.css';
import '../../css/h/ho1yev95w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="oqamne5gv wm-shadow"/><path class="s3vwoh_yq"/><path class="w0lnjhbxr"/><path class="wclxpe_ot"/><path class="e1j8snb_m"/><path class="ru_iehh2g wm-shine"/><path class="ho1yev95w wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:pill-bottle"} {...others} />);
}

export default Component;
