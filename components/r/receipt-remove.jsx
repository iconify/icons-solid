import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/egjxc-1sn.css';
import '../../css/y/yk_u-tb_w.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="egjxc-1sn"/><path class="yk_u-tb_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:receipt-remove"} {...others} />);
}

export default Component;
