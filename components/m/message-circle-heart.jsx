import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v5fz6ctfc.css';
import '../../css/s/sdzbjqbjm.css';
import '../../css/s/sewtrvbyb.css';
import '../../css/h/hfg9ykbue.css';
import '../../css/e/eda20jzdt.css';
import '../../css/m/mibyckp-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="v5fz6ctfc wm-shadow"/><path class="sdzbjqbjm"/><path class="sewtrvbyb"/><path class="hfg9ykbue"/><path class="eda20jzdt"/><path class="mibyckp-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:message-circle-heart"} {...others} />);
}

export default Component;
