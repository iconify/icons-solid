import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c2_2-lkbx.css';
import '../../css/t/tln7klbcz.css';
import '../../css/f/fj46i262q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="c2_2-lkbx wm-k"/><path class="tln7klbcz wm-k"/><path class="fj46i262q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:puja-thali-gloss"} {...others} />);
}

export default Component;
