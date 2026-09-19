import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gba9uc44c.css';
import '../../css/g/glxbdplyh.css';
import '../../css/g/guv2-nbpq.css';
import '../../css/s/su6ajm_aq.css';
import '../../css/l/lz0zevbvx.css';
import '../../css/c/c8r6cbcnm.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="gba9uc44c"/><path class="glxbdplyh"/><path class="guv2-nbpq"/><path class="su6ajm_aq"/><path class="lz0zevbvx"/><path class="c8r6cbcnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:clojure"} {...others} />);
}

export default Component;
