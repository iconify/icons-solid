import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zf6m_rg7v.css';
import '../../css/d/dv86dk8ai.css';
import '../../css/t/t3tivrbho.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zf6m_rg7v"/><path class="dv86dk8ai"/><path class="t3tivrbho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tag-price-broken"} {...others} />);
}

export default Component;
