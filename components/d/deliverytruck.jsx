import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ko6qyh8kc.css';
import '../../css/l/lxpp23b9t.css';
import '../../css/j/jpnbaccbm.css';
import '../../css/g/gmyqum2ed.css';
import '../../css/s/sf9hz8haq.css';
import '../../css/x/xowgn_eci.css';
import '../../css/q/q7mfscc1v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ko6qyh8kc"/><path class="lxpp23b9t"/><path class="jpnbaccbm"/><path class="gmyqum2ed"/><path class="sf9hz8haq"/><path class="xowgn_eci"/><path class="q7mfscc1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:deliverytruck"} {...others} />);
}

export default Component;
