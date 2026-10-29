import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sj419obqh.css';
import '../../css/z/zu23d_b1x.css';
import '../../css/g/g__p88bfn.css';
import '../../css/y/ys4jrrrwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sj419obqh"/><path class="wm-a zu23d_b1x"/><path class="g__p88bfn wm-k"/><path class="wm-a ys4jrrrwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:server-sketch"} {...others} />);
}

export default Component;
