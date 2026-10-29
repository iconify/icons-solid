import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cp7eoxcex.css';
import '../../css/n/ndqtfyprp.css';
import '../../css/u/uf2wh5bzg.css';
import '../../css/h/hf28b1kac.css';
import '../../css/f/fx6f1ondq.css';
import '../../css/f/fnun6r8dy.css';
import '../../css/q/q4w-8lb4k.css';
import '../../css/x/xh1em-b2i.css';
import '../../css/r/rsd9lrflm.css';
import '../../css/x/x8m3kkb2c.css';
import '../../css/r/rgl7t9baj.css';
import '../../css/a/a_-g9vblo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cp7eoxcex wm-shadow"/><path class="ndqtfyprp wm-k"/><path class="uf2wh5bzg wm-k"/><path class="hf28b1kac wm-k"/><path class="fx6f1ondq wm-k"/><path class="fnun6r8dy wm-k"/><path class="q4w-8lb4k wm-shine"/><path class="wm-a xh1em-b2i"/><path class="rsd9lrflm wm-a"/><path class="wm-a x8m3kkb2c"/><path class="rgl7t9baj wm-a"/><path class="a_-g9vblo wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:shopping-cart"} {...others} />);
}

export default Component;
