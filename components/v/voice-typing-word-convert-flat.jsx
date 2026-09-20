import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/se-p7q76c.css';
import '../../css/z/zq-79zbmc.css';
import '../../css/x/xkbe_rbkg.css';
import '../../css/j/juinc5b_k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="se-p7q76c"/><path clip-rule="evenodd" class="zq-79zbmc"/><path class="xkbe_rbkg"/><path class="juinc5b_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:voice-typing-word-convert-flat"} {...others} />);
}

export default Component;
