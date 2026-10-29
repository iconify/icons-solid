import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/w70xadt-h.css';
import '../../css/p/phq1z2s3v.css';
import '../../css/n/nu56q3uzb.css';
import '../../css/p/pnn9diwwa.css';
import '../../css/m/mbq1wgbfw.css';
import '../../css/m/mszie6bqi.css';
import '../../css/j/jmx8a7b4j.css';
import '../../css/q/qirdj7bzy.css';
import '../../css/j/juu_tubfq.css';
import '../../css/s/sbj3fsbgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="w70xadt-h wm-shadow"/><path class="phq1z2s3v"/><path class="nu56q3uzb"/><path class="pnn9diwwa"/><path class="mbq1wgbfw"/><path class="mszie6bqi"/><path class="jmx8a7b4j"/><path class="qirdj7bzy wm-shine"/><path class="juu_tubfq wm-shine"/><path class="sbj3fsbgy wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:avatar-teen"} {...others} />);
}

export default Component;
