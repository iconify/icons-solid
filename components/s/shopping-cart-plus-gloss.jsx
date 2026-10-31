import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cvn4__-zg.css';
import '../../css/y/ylau8qb1p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="cvn4__-zg wm-k"/><path class="wm-a ylau8qb1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shopping-cart-plus-gloss"} {...others} />);
}

export default Component;
