import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i8ycj25bn.css';
import '../../css/z/zezopqb-y.css';
import '../../css/m/mg8w1acnv.css';
import '../../css/v/v7gggobaq.css';
import '../../css/o/o2esqvb6x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i8ycj25bn"/><circle class="zezopqb-y"/><circle class="mg8w1acnv"/><circle class="v7gggobaq"/><circle class="o2esqvb6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:tic-tac-toe"} {...others} />);
}

export default Component;
