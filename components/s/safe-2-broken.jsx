import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n6f1xybpw.css';
import '../../css/f/fmbpbptfg.css';
import '../../css/t/tw1vd4bor.css';
import '../../css/s/si_mtzbvj.css';
import '../../css/z/zgmsqobxk.css';
import '../../css/x/xfkav6bcs.css';
import '../../css/j/jnsl4jgmw.css';
import '../../css/z/zvdjcqb7s.css';
import '../../css/h/hbqlshb9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="n6f1xybpw"/><path class="fmbpbptfg"/><path class="tw1vd4bor"/><path class="si_mtzbvj"/><path class="zgmsqobxk"/><path class="xfkav6bcs"/><path class="jnsl4jgmw"/><path class="zvdjcqb7s"/><path class="hbqlshb9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:safe-2-broken"} {...others} />);
}

export default Component;
