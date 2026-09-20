import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ibtygceqq.css';
import '../../css/n/n6bnf7vjg.css';
import '../../css/a/aya8ey3mu.css';
import '../../css/x/xw8t-br4p.css';
import '../../css/c/cswz24b2i.css';
import '../../css/w/wsncovghx.css';
import '../../css/x/xjyqi8bti.css';
import '../../css/d/db8tn7b2h.css';
import '../../css/o/opwzy4b6v.css';
import '../../css/x/xygkmmbil.css';
import '../../css/f/frrb2hn_m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ibtygceqq"/><path class="n6bnf7vjg"/><path class="aya8ey3mu"/><path class="xw8t-br4p"/><path class="cswz24b2i"/><path class="wsncovghx"/><path class="xjyqi8bti"/><path class="db8tn7b2h"/><path class="opwzy4b6v"/><path class="xygkmmbil"/><path class="frrb2hn_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:sailboat"} {...others} />);
}

export default Component;
