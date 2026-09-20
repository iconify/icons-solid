import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tt7m_v88c.css';
import '../../css/i/i901x8m8d.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="tt7m_v88c"/><path class="i901x8m8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shopping-bag-hand-bag-1-shopping-bag-purse-goods-item-products"} {...others} />);
}

export default Component;
