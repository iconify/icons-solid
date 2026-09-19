import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/m/m11by0ayr.css';
import '../../css/l/li-57ccsl.css';
import '../../css/k/ktnys9vtf.css';
import '../../css/x/xupb65btz.css';
import '../../css/n/ne0kmbc_i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="m11by0ayr"/><circle transform="rotate(-90 13 8.944)" class="li-57ccsl"/><path class="ktnys9vtf"/><path class="xupb65btz"/><path class="ne0kmbc_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:split-turn-down-right"} {...others} />);
}

export default Component;
