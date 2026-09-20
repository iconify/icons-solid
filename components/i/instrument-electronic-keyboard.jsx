import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wt8g_ac0r.css';
import '../../css/p/prpah_g1x.css';
import '../../css/v/vom3nj2sc.css';
import '../../css/e/eysmyi_kf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wt8g_ac0r"/><path class="prpah_g1x"/><path class="vom3nj2sc"/><path class="eysmyi_kf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:instrument-electronic-keyboard"} {...others} />);
}

export default Component;
