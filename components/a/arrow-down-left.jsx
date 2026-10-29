import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/e/e25l1ab5m.css';
import '../../css/v/v6lv9fxak.css';
import '../../css/z/zabrmgb4f.css';
import '../../css/q/qoo_fhb1x.css';
import '../../css/l/l602qhbrr.css';
import '../../css/k/kn6ik1w-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="e25l1ab5m wm-shadow"/><path class="v6lv9fxak"/><path class="zabrmgb4f"/><path class="qoo_fhb1x"/><path class="l602qhbrr wm-shine"/><path class="kn6ik1w-e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:arrow-down-left"} {...others} />);
}

export default Component;
