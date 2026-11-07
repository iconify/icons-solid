import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xvjk-cbox.css';
import '../../css/g/g9yxis6-e.css';
import '../../css/d/dgy22zbai.css';
import '../../css/n/n6f1xybpw.css';
import '../../css/s/suncmkbcq.css';
import '../../css/x/xdjqjik-w.css';
import '../../css/f/fmbpbptfg.css';
import '../../css/t/tw1vd4bor.css';
import '../../css/j/jnsl4jgmw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xvjk-cbox"/><path class="g9yxis6-e"/><path class="dgy22zbai"/><path class="n6f1xybpw"/><path class="suncmkbcq"/><path class="xdjqjik-w"/><path class="fmbpbptfg"/><path class="tw1vd4bor"/><path class="jnsl4jgmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:safe-2-linear"} {...others} />);
}

export default Component;
