import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/emnqzsphc.css';
import '../../css/q/qfdfaqb-i.css';
import '../../css/k/k8r16tb_s.css';
import '../../css/f/fvlr6ozns.css';
import '../../css/x/xkdz3wqic.css';
import '../../css/b/b7uhi4bry.css';
import '../../css/p/ps7z7wb7n.css';
import '../../css/d/d6hsydbgj.css';
import '../../css/p/pa_yjac-e.css';
import '../../css/x/xssxhhjee.css';
import '../../css/k/kvgj5pbkt.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="emnqzsphc"/><path class="qfdfaqb-i"/><path class="k8r16tb_s"/><path class="fvlr6ozns"/><path class="xkdz3wqic"/><path class="b7uhi4bry"/><path class="ps7z7wb7n"/><path class="d6hsydbgj"/><path class="pa_yjac-e"/><path class="xssxhhjee"/><path class="kvgj5pbkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:woman-red-hair"} {...others} />);
}

export default Component;
