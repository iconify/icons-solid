import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0f_iqbeu.css';
import '../../css/p/pyalxlbvl.css';
import '../../css/t/ts555xbjy.css';
import '../../css/x/xzy4uc7cq.css';
import '../../css/c/c8hl5vbrd.css';
import '../../css/n/nqdrjdv5g.css';
import '../../css/o/oa_9tp3ig.css';
import '../../css/s/swzlm7puq.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="c0f_iqbeu"/><circle class="pyalxlbvl"/><circle class="ts555xbjy"/><path class="xzy4uc7cq"/><circle class="c8hl5vbrd"/><circle class="nqdrjdv5g"/><circle class="oa_9tp3ig"/><circle class="swzlm7puq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:load-a"} {...others} />);
}

export default Component;
