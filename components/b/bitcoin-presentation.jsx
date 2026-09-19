import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/epnj5wb4n.css';
import '../../css/i/ix_3swbon.css';
import '../../css/c/cxw_bfcfr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="epnj5wb4n"/><path class="ix_3swbon"/><path class="cxw_bfcfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-presentation"} {...others} />);
}

export default Component;
