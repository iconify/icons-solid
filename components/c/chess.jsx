import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr36qhbyi.css';
import '../../css/j/j8x3zcb_i.css';
import '../../css/e/ez-bw-wis.css';
import '../../css/t/t3ic0-bzn.css';
import '../../css/r/r4pbjdb-p.css';
import '../../css/a/abxnnsf8n.css';
import '../../css/s/sao6neomz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="tr36qhbyi"><path class="j8x3zcb_i"/><path class="ez-bw-wis"/><path class="t3ic0-bzn"/><path class="r4pbjdb-p"/><path class="abxnnsf8n"/><path class="sao6neomz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chess"} {...others} />);
}

export default Component;
