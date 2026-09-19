import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tlgdwxbba.css';
import '../../css/j/j3ousrymj.css';
import '../../css/t/t65bl0bhm.css';
import '../../css/n/nghcg_b1k.css';
import '../../css/x/x56xuz19c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="tlgdwxbba"/><path class="j3ousrymj"/><path class="t65bl0bhm"/><path class="nghcg_b1k"/><path class="x56xuz19c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cricket-helmet"} {...others} />);
}

export default Component;
