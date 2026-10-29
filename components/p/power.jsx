import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdgbhdbzt.css';
import '../../css/p/pla9akn6j.css';
import '../../css/x/xwbt8jbcw.css';
import '../../css/m/m7dz4xbax.css';
import '../../css/f/flagi397l.css';
import '../../css/d/drotr3gay.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kdgbhdbzt wm-shadow"/><path class="pla9akn6j wm-k"/><path class="wm-k xwbt8jbcw"/><path class="m7dz4xbax wm-k"/><path class="flagi397l wm-k"/><path class="drotr3gay wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:power"} {...others} />);
}

export default Component;
