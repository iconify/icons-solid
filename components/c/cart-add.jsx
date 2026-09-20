import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/d0koy98sj.css';
import '../../css/x/xic3o0b6r.css';
import '../../css/j/jin0lkpdv.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="d0koy98sj"/><path class="xic3o0b6r"/><path class="jin0lkpdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:cart-add"} {...others} />);
}

export default Component;
