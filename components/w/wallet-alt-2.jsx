import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/tza10u88t.css';
import '../../css/j/j4ztgsbzo.css';
import '../../css/b/bz4_leuvc.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="tza10u88t"/><path class="j4ztgsbzo"/><path class="bz4_leuvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:wallet-alt-2"} {...others} />);
}

export default Component;
