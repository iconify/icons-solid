import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cdbxhjboo.css';
import '../../css/d/dhn_2_b2p.css';
import '../../css/i/i3nk3fxjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cdbxhjboo"/><path class="dhn_2_b2p"/><path class="i3nk3fxjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:check-payment-sign"} {...others} />);
}

export default Component;
