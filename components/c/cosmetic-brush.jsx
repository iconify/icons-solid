import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/a/a2xlkbcsl.css';
import '../../css/t/t4062tqxo.css';
import '../../css/w/wkm8tcikg.css';
import '../../css/t/tkr1qdb7n.css';
import '../../css/v/v98q6yghf.css';
import '../../css/r/rlda0dbpx.css';
import '../../css/s/sqqqjo08o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="a2xlkbcsl"/><path class="t4062tqxo"/><path class="wkm8tcikg"/><path class="tkr1qdb7n"/><path class="v98q6yghf"/><path class="rlda0dbpx"/><path class="sqqqjo08o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cosmetic-brush"} {...others} />);
}

export default Component;
