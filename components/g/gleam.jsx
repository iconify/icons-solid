import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvkoc4bjh.css';
import '../../css/d/ddfstw25s.css';
import '../../css/y/yf15yqbyv.css';
import '../../css/e/exrb9kblz.css';
import '../../css/r/r4khun_1o.css';
import '../../css/x/x2e9vjbcf.css';

const viewBox = {"width":2000,"height":1915};
const content = `<path class="zvkoc4bjh"/><g class="ddfstw25s"><path class="yf15yqbyv"/><circle class="exrb9kblz"/><circle class="r4khun_1o"/><path class="x2e9vjbcf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:gleam"} {...others} />);
}

export default Component;
