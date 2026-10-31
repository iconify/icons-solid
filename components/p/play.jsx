import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/w/w0pkh7mem.css';
import '../../css/g/g3l8fyc7a.css';
import '../../css/e/euw3jebyr.css';
import '../../css/l/l6swvrbfj.css';
import '../../css/l/lu-n5dblc.css';
import '../../css/r/rmvc8lmte.css';
import '../../css/g/g4ttz8ltw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="w0pkh7mem"/><path class="g3l8fyc7a"/><path class="euw3jebyr wm-shine"/><path class="l6swvrbfj"/><path class="lu-n5dblc"/><path class="rmvc8lmte"/><path class="g4ttz8ltw wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:play"} {...others} />);
}

export default Component;
