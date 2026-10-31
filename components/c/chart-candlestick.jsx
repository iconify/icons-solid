import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jcdesib7u.css';
import '../../css/w/wnz0iqbyf.css';
import '../../css/t/tzhb1vbig.css';
import '../../css/w/wb3c7x6fa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="jcdesib7u"/><path class="wm-k wnz0iqbyf"/><path class="tzhb1vbig wm-a"/><path class="wb3c7x6fa wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:chart-candlestick"} {...others} />);
}

export default Component;
