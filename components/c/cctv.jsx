import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/n/n5n0fxlag.css';
import '../../css/d/d20nez6xw.css';
import '../../css/q/qhqmekblq.css';
import '../../css/i/ipr557bpu.css';
import '../../css/t/t9xegkdtf.css';
import '../../css/j/j7q7pnbrf.css';
import '../../css/j/jhd5zwjhy.css';
import '../../css/f/fgrdvtb5a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="n5n0fxlag"/><path class="d20nez6xw"/><path class="qhqmekblq wm-shine"/><path class="ipr557bpu wm-k"/><path class="t9xegkdtf wm-a"/><path class="j7q7pnbrf"/><path class="jhd5zwjhy"/><path class="fgrdvtb5a wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:cctv"} {...others} />);
}

export default Component;
