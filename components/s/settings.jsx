import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/mh19hsbxq.css';
import '../../css/k/k1iom5bez.css';
import '../../css/q/q44493blq.css';
import '../../css/c/crrf0rfgs.css';
import '../../css/i/is_g28qff.css';
import '../../css/z/zy5wd1-0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="mh19hsbxq wm-shadow"/><path class="k1iom5bez"/><path class="q44493blq"/><path class="crrf0rfgs"/><path class="is_g28qff wm-shine"/><path class="wm-deco zy5wd1-0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:settings"} {...others} />);
}

export default Component;
