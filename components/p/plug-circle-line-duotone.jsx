import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jwk3noh0t.css';
import '../../css/h/h0rtdjbeb.css';
import '../../css/n/ndcdy4d6d.css';
import '../../css/z/zvfketbhl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jwk3noh0t"/><path class="h0rtdjbeb"/><path class="ndcdy4d6d"/><path class="zvfketbhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:plug-circle-line-duotone"} {...others} />);
}

export default Component;
