import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bue-pythe.css';
import '../../css/b/bav6stb8q.css';
import '../../css/i/it67b7btz.css';
import '../../css/i/iwxj79qtm.css';
import '../../css/d/duowzbcyc.css';
import '../../css/e/eycan2bvo.css';
import '../../css/j/jhbdz-lwo.css';
import '../../css/r/r3ke4qvup.css';
import '../../css/e/err335uto.css';
import '../../css/m/m8ykoqbwm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="bue-pythe"/><path class="bav6stb8q"/><path class="it67b7btz"/><path class="iwxj79qtm wm-shine"/><path class="duowzbcyc wm-k"/><path class="eycan2bvo wm-a"/><path class="jhbdz-lwo wm-s"/><path class="r3ke4qvup"/><path class="err335uto"/><path class="m8ykoqbwm wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:ring-box"} {...others} />);
}

export default Component;
