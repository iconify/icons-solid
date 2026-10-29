import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/g-sgu6b1d.css';
import '../../css/v/vae2kkbgb.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/a/a53k2acqr.css';
import '../../css/g/gt402wbqt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="g-sgu6b1d wm-deco"/><path class="vae2kkbgb wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="a53k2acqr wm-k"/><path class="gt402wbqt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:train-blueprint"} {...others} />);
}

export default Component;
