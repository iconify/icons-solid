import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tsvf1-k4e.css';
import '../../css/f/fhxy51bnc.css';
import '../../css/h/hxvw70rss.css';
import '../../css/h/hwdd8he7k.css';
import '../../css/i/i770uqt7u.css';
import '../../css/f/fvbk-8bio.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="tsvf1-k4e"/><path class="fhxy51bnc wm-s"/><path class="hxvw70rss wm-shine"/><path class="hwdd8he7k wm-k"/><path class="i770uqt7u wm-a"/><path class="fvbk-8bio wm-s"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:paper-fan"} {...others} />);
}

export default Component;
