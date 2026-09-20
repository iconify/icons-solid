import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f36zf__4f.css';
import '../../css/b/b48qn4bse.css';
import '../../css/b/bup41hc1n.css';
import '../../css/h/hjq1ervwo.css';
import '../../css/q/qk-b8h59k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f36zf__4f"/><path class="b48qn4bse"/><path class="bup41hc1n"/><path class="hjq1ervwo"/><path class="qk-b8h59k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:crypto-currency-bitcoin-laptop"} {...others} />);
}

export default Component;
