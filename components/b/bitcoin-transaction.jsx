import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/drxknmbwm.css';
import '../../css/n/ny5thtblp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="drxknmbwm"/><path class="ny5thtblp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-transaction"} {...others} />);
}

export default Component;
