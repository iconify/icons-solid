import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/e/ea3av8bfm.css';
import '../../css/i/icb2enbqc.css';
import '../../css/x/xmr2hrb1e.css';
import '../../css/a/aiybtnt3k.css';
import '../../css/p/p1ivrpbvz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="ea3av8bfm"/><path class="icb2enbqc"/><path class="xmr2hrb1e"/><path class="aiybtnt3k"/><path class="p1ivrpbvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:fishing"} {...others} />);
}

export default Component;
