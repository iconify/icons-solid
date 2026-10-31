import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/iww45wbpv.css';
import '../../css/t/t8sucxblu.css';
import '../../css/q/qcu30kbmv.css';
import '../../css/j/jmvv3kbnk.css';
import '../../css/i/i2a-c6bbv.css';
import '../../css/i/i1g1qkwrt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="iww45wbpv"/><path class="t8sucxblu"/><path class="qcu30kbmv wm-shine"/><path class="jmvv3kbnk wm-k"/><path class="i2a-c6bbv wm-a"/><path class="i1g1qkwrt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:calendar-heart"} {...others} />);
}

export default Component;
