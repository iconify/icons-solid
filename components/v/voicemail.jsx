import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1dcej6wa.css';
import '../../css/z/zmke-gd0d.css';
import '../../css/a/ao32qab8u.css';
import '../../css/i/ibnvpvbgc.css';
import '../../css/z/z_pc_zjgy.css';
import '../../css/d/dknl1kbet.css';
import '../../css/v/vkxwvgfkz.css';
import '../../css/e/e1hyfodyb.css';
import '../../css/o/oxoi3jblm.css';
import '../../css/z/zux53bp9l.css';
import '../../css/b/byod15bem.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w1dcej6wa wm-shadow"/><path class="wm-k zmke-gd0d"/><path class="ao32qab8u wm-k"/><path class="ibnvpvbgc wm-k"/><path class="wm-k z_pc_zjgy"/><path class="dknl1kbet wm-shine"/><path class="vkxwvgfkz wm-a"/><path class="e1hyfodyb wm-a"/><path class="oxoi3jblm wm-k"/><path class="wm-k zux53bp9l"/><path class="byod15bem wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:voicemail"} {...others} />);
}

export default Component;
