import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/c_b1mvitm.css';
import '../../css/z/zp4-jh3cm.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="c_b1mvitm"/><path class="zp4-jh3cm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:subway"} {...others} />);
}

export default Component;
