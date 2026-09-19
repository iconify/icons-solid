import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/ncueohb1u.css';
import '../../css/g/gganp7bnf.css';
import '../../css/t/t0brvj_8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ncueohb1u"/><path class="gganp7bnf"/><path class="t0brvj_8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-wallet"} {...others} />);
}

export default Component;
