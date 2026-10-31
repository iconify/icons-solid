import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/p/pq0hpf12d.css';
import '../../css/f/fqggvpb6p.css';
import '../../css/k/kp1t_z09t.css';
import '../../css/x/xqwfbaurr.css';
import '../../css/t/t7eoddb7g.css';
import '../../css/k/kczjorbzi.css';
import '../../css/q/qse339gmh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="pq0hpf12d"/><path class="fqggvpb6p"/><path class="kp1t_z09t wm-shine"/><path class="wm-k xqwfbaurr"/><path class="t7eoddb7g wm-a"/><path class="kczjorbzi"/><path class="qse339gmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:cursor"} {...others} />);
}

export default Component;
