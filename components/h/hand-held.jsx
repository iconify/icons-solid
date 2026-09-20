import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/q/q70smac0j.css';
import '../../css/k/kcm93prbq.css';
import '../../css/p/p1mwtgbkm.css';
import '../../css/l/lq_kzjnfn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="q70smac0j"/><path class="kcm93prbq"/><path class="p1mwtgbkm"/><path class="lq_kzjnfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:hand-held"} {...others} />);
}

export default Component;
