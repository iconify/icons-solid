import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/u/utf5_xbzs.css';
import '../../css/i/i-0o_641g.css';
import '../../css/h/hjnl4zguy.css';
import '../../css/z/zyl4k9yjq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="utf5_xbzs"/><path class="i-0o_641g"/><path class="hjnl4zguy"/><path class="zyl4k9yjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:upload-three"} {...others} />);
}

export default Component;
