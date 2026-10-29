import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ety1tgnuk.css';
import '../../css/f/f4ilq6zpr.css';
import '../../css/u/uksvl2jdg.css';
import '../../css/k/keamv5b7w.css';
import '../../css/o/ox3l4obif.css';
import '../../css/q/qywb6ab6b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ety1tgnuk wm-shadow"/><path class="f4ilq6zpr wm-k"/><path class="uksvl2jdg wm-k"/><path class="keamv5b7w wm-k"/><path class="ox3l4obif wm-k"/><path class="qywb6ab6b wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:heading"} {...others} />);
}

export default Component;
