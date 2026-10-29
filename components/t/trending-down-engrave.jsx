import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xsiiobcvs.css';
import '../../css/i/iq0j3ibeh.css';
import '../../css/x/xdqw6obrh.css';
import '../../css/c/cjqmx4fpw.css';
import '../../css/t/tv2-46qgh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k xsiiobcvs"/><path class="iq0j3ibeh wm-a"/><path class="wm-shadow xdqw6obrh"/><path class="cjqmx4fpw wm-k"/><path class="tv2-46qgh wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:trending-down-engrave"} {...others} />);
}

export default Component;
