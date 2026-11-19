import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_kz6n-mp.css';
import '../../css/p/ptj1bc9bv.css';
import '../../css/d/dt7pd7bwt.css';
import '../../css/z/zdd26cb8h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="b_kz6n-mp"/><path clip-rule="evenodd" class="ptj1bc9bv"/><path class="dt7pd7bwt"/><path class="zdd26cb8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:caravan"} {...others} />);
}

export default Component;
