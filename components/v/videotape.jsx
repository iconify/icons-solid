import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i_kpawtqq.css';
import '../../css/m/mqtixbwqo.css';
import '../../css/y/y58k7bb-w.css';
import '../../css/l/l0v-b4kbr.css';
import '../../css/c/cke3tihzk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="i_kpawtqq"/><path class="mqtixbwqo"/><circle class="y58k7bb-w"/><path class="l0v-b4kbr"/><circle class="cke3tihzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:videotape"} {...others} />);
}

export default Component;
