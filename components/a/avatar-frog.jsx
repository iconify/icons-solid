import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/x_q6ybc8x.css';
import '../../css/s/s33cwxgjz.css';
import '../../css/k/k6h1q8bpn.css';
import '../../css/x/x-rju-b-t.css';
import '../../css/r/ro6xbtbkg.css';
import '../../css/e/eck0kcbvu.css';
import '../../css/f/fyncz8bga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow x_q6ybc8x"/><path class="s33cwxgjz"/><path class="k6h1q8bpn"/><path class="x-rju-b-t"/><path class="ro6xbtbkg"/><path class="eck0kcbvu wm-shine"/><path class="fyncz8bga wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:avatar-frog"} {...others} />);
}

export default Component;
