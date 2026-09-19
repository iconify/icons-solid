import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jes4gpbsu.css';
import '../../css/a/aljk-jb3e.css';
import '../../css/q/qfdfaqb-i.css';
import '../../css/k/k8r16tb_s.css';
import '../../css/f/fvlr6ozns.css';
import '../../css/x/xkdz3wqic.css';
import '../../css/r/rl5nj7xsk.css';
import '../../css/p/ps7z7wb7n.css';
import '../../css/d/d6hsydbgj.css';
import '../../css/p/pa_yjac-e.css';
import '../../css/s/sgt65lbjj.css';
import '../../css/d/dlbupac8a.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jes4gpbsu"/><path class="aljk-jb3e"/><path class="qfdfaqb-i"/><path class="k8r16tb_s"/><path class="fvlr6ozns"/><path class="xkdz3wqic"/><path class="rl5nj7xsk"/><path class="ps7z7wb7n"/><path class="d6hsydbgj"/><path class="pa_yjac-e"/><path class="sgt65lbjj"/><path class="dlbupac8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:woman-white-hair"} {...others} />);
}

export default Component;
