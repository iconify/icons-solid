import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4fi1957z.css';
import '../../css/t/ta60wwblw.css';
import '../../css/v/vtwonfutg.css';
import '../../css/a/azxrdyv-q.css';
import '../../css/k/kmel05brv.css';
import '../../css/j/j10-k-gos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c4fi1957z wm-k"/><path class="ta60wwblw wm-k"/><path class="vtwonfutg wm-k"/><path class="azxrdyv-q wm-k"/><path class="kmel05brv wm-shine"/><path class="j10-k-gos wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:bookmark-check"} {...others} />);
}

export default Component;
