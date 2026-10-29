import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/m6o00pbec.css';
import '../../css/f/fg2acgb-l.css';
import '../../css/v/vlp9v8btv.css';
import '../../css/c/cwsn5mb2e.css';
import '../../css/e/ebgwytbri.css';
import '../../css/h/h-s7skbhx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="m6o00pbec wm-shadow"/><path class="fg2acgb-l"/><path class="vlp9v8btv"/><path class="cwsn5mb2e"/><path class="ebgwytbri wm-shine"/><path class="h-s7skbhx wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:indent-decrease"} {...others} />);
}

export default Component;
