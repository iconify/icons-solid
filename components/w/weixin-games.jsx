import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wdqo95bcz.css';
import '../../css/j/jeb--5b6n.css';
import '../../css/n/nnltlszwy.css';
import '../../css/n/nnh7h463t.css';
import '../../css/u/uwj-6ebas.css';
import '../../css/z/zqcrcnwuk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="wdqo95bcz"/><path class="jeb--5b6n"/><path class="nnltlszwy"/><path class="nnh7h463t"/><path class="uwj-6ebas"/><path class="zqcrcnwuk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:weixin-games"} {...others} />);
}

export default Component;
