import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kafw2jbbs.css';
import '../../css/b/b6p07tn5i.css';
import '../../css/z/zib8m2_fq.css';
import '../../css/e/eacle5s9s.css';
import '../../css/u/u0km1qbun.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kafw2jbbs wm-k"/><path class="b6p07tn5i wm-a"/><path class="wm-shadow zib8m2_fq"/><path class="eacle5s9s wm-k"/><path class="u0km1qbun wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:north-star-engrave"} {...others} />);
}

export default Component;
