import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/o/oto7iqo1e.css';
import '../../css/o/oupjr30cu.css';
import '../../css/u/ug-g1ubih.css';
import '../../css/f/fz2woib5m.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="oto7iqo1e"/><path class="oupjr30cu wm-shine"/><path class="ug-g1ubih wm-k"/><path class="fz2woib5m wm-a"/><path class="i49wp7b0m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:shopping-basket"} {...others} />);
}

export default Component;
