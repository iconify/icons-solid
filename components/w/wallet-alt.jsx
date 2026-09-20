import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/l/l74vqrbct.css';
import '../../css/c/c-4a-7wjm.css';
import '../../css/b/bz4_leuvc.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="l74vqrbct"/><path class="c-4a-7wjm"/><path class="bz4_leuvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:wallet-alt"} {...others} />);
}

export default Component;
