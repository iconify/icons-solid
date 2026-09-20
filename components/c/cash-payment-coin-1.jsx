import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nab_d0b5c.css';
import '../../css/f/fd-mpbcys.css';
import '../../css/d/dxlw381mk.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nab_d0b5c"/><path class="fd-mpbcys"/><path class="dxlw381mk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:cash-payment-coin-1"} {...others} />);
}

export default Component;
