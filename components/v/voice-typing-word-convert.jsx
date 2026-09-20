import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/hd0ge28zi.css';
import '../../css/m/mt8hwf42v.css';
import '../../css/z/zg7jkkb3w.css';
import '../../css/m/mks0a1p6k.css';
import '../../css/o/o6t496bey.css';
import '../../css/c/clj539b2z.css';
import '../../css/d/dpfe594le.css';
import '../../css/d/dpuq3eruk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="hd0ge28zi"/><path class="mt8hwf42v"/><path class="zg7jkkb3w"/><path class="mks0a1p6k"/><path class="o6t496bey"/><path class="clj539b2z"/><path class="dpfe594le"/><path class="dpuq3eruk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:voice-typing-word-convert"} {...others} />);
}

export default Component;
