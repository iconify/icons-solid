import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z3-7nebkq.css';
import '../../css/u/uw4_77bkt.css';
import '../../css/a/a5z88ybwf.css';
import '../../css/c/chbmmywsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z3-7nebkq"/><circle class="uw4_77bkt"/><circle class="a5z88ybwf"/><path class="chbmmywsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:golf-cart"} {...others} />);
}

export default Component;
