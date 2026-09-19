import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iyt5f05aw.css';
import '../../css/k/k94_1vb5f.css';
import '../../css/w/wuiqsme6x.css';
import '../../css/q/qdd069bqr.css';
import '../../css/u/ug3toub-q.css';
import '../../css/e/e_hozrb3b.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="iyt5f05aw"/><path class="k94_1vb5f"/><path class="wuiqsme6x"/><path class="qdd069bqr"/><path class="ug3toub-q"/><path class="e_hozrb3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:squid"} {...others} />);
}

export default Component;
