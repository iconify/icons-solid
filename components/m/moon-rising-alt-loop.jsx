import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n707we.css';
import '../../css/u/ufposl.css';
import '../../css/m/m9pw2i.css';
import '../../css/t/tcpy8m.css';
import '../../css/k/kg_b-h.css';
import '../../css/u/urr6zz.css';
import '../../css/c/clz4mc.css';
import '../../css/r/r0t14p.css';
import '../../css/q/q_hzxa.css';
import '../../css/b/bbw7vs.css';
import '../../css/q/qr6ndy.css';
import '../../css/d/d-k-hl-x.css';
import '../../css/s/so-_lg20b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n707we ufposl"/><path class="m9pw2i tcpy8m ufposl"/><path class="kg_b-h m9pw2i ufposl"/><path class="m9pw2i ufposl urr6zz whmues"/><path class="clz4mc m9pw2i ufposl"/><path class="m9pw2i r0t14p ufposl"/><path class="m9pw2i q_hzxa ufposl"/><path class="bbw7vs m9pw2i ufposl"/><path class="m9pw2i qr6ndy ufposl"/><path class="m9pw2i r0ttyd ufposl urr6zz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:moon-rising-alt-loop"} {...others} />);
}

export default Component;
