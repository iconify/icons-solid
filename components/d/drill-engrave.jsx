import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wo61f7b1d.css';
import '../../css/p/p_swgyb9q.css';
import '../../css/m/mrbdxivog.css';
import '../../css/j/jrm8jlzgh.css';
import '../../css/m/m5u5l5b7g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k wo61f7b1d"/><path class="p_swgyb9q wm-a"/><path class="mrbdxivog wm-shadow"/><path class="jrm8jlzgh wm-k"/><path class="m5u5l5b7g wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:drill-engrave"} {...others} />);
}

export default Component;
