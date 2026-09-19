import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fh6qnzbmt.css';
import '../../css/s/sjowjbelj.css';
import '../../css/k/kyor_abte.css';
import '../../css/v/v-v48ubxx.css';
import '../../css/i/iw7g_6bnz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fh6qnzbmt"/><path class="sjowjbelj"/><path class="kyor_abte"/><path class="v-v48ubxx"/><path class="iw7g_6bnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:kaaba-01"} {...others} />);
}

export default Component;
