import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/d/dpwho_k6y.css';
import '../../css/m/m_463rebt.css';
import '../../css/d/dwm4owi0d.css';
import '../../css/k/k6bkybbdw.css';
import '../../css/b/bdaloybdj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="dpwho_k6y"/><path class="m_463rebt"/><circle class="dwm4owi0d"/><path class="k6bkybbdw"/><path class="bdaloybdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:disabled-computer"} {...others} />);
}

export default Component;
