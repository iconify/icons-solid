import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3v-dtbws.css';
import '../../css/b/bhhi-kbxq.css';
import '../../css/m/m-amt1bth.css';
import '../../css/a/a2hv6pq-b.css';
import '../../css/e/ejd173esz.css';
import '../../css/k/k68nhmbzn.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/r/rxwcinqmk.css';
import '../../css/m/m8rk77bya.css';
import '../../css/l/lxhipi8kl.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="b3v-dtbws"/><path class="bhhi-kbxq"/><circle transform="rotate(-45 27 32.043)" class="m-amt1bth"/><path class="a2hv6pq-b"/><path class="ejd173esz"/><path class="k68nhmbzn"/><g class="doj9dq_jg"><path class="rxwcinqmk"/><path class="m8rk77bya"/><path class="lxhipi8kl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:shaved-ice"} {...others} />);
}

export default Component;
