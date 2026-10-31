import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5rnn1bkq.css';
import '../../css/f/fdfactb1k.css';
import '../../css/l/lk150-bhv.css';
import '../../css/y/y7jfc9b9p.css';
import '../../css/x/xv-iaua6h.css';
import '../../css/a/azyh3ob9i.css';
import '../../css/k/kwmm6dbik.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="t5rnn1bkq"/><path class="fdfactb1k"/><path class="lk150-bhv"/><path class="y7jfc9b9p"/><path class="xv-iaua6h"/><path class="azyh3ob9i"/><path clip-rule="evenodd" class="kwmm6dbik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:crying-jordan"} {...others} />);
}

export default Component;
