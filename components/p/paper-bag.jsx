import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqau8zbpj.css';
import '../../css/c/cc9g64bnc.css';
import '../../css/x/xwim_abin.css';
import '../../css/d/d6yirzm0p.css';
import '../../css/f/fl816wwvr.css';
import '../../css/q/q7rzffsgz.css';
import '../../css/b/bbds41o0u.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="pqau8zbpj"/><path class="cc9g64bnc"/><path class="xwim_abin"/><path class="d6yirzm0p"/><circle class="fl816wwvr"/><circle class="q7rzffsgz"/><path clip-rule="evenodd" class="bbds41o0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:paper-bag"} {...others} />);
}

export default Component;
