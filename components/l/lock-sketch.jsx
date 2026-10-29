import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vm9wui7_h.css';
import '../../css/t/t5_glnobk.css';
import '../../css/c/c-0urdbth.css';
import '../../css/p/pausm5bgw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="vm9wui7_h"/><path class="t5_glnobk wm-a"/><path class="c-0urdbth wm-k"/><path class="pausm5bgw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lock-sketch"} {...others} />);
}

export default Component;
