import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lggc47b1l.css';
import '../../css/h/hfmjco30i.css';
import '../../css/j/j2lty-60i.css';
import '../../css/s/shw1frbig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lggc47b1l wm-k"/><path class="hfmjco30i wm-a"/><path class="j2lty-60i wm-k"/><path class="shw1frbig wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-donut-sketch"} {...others} />);
}

export default Component;
