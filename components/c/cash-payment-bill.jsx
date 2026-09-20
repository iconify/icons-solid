import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/ry_pmlbyo.css';
import '../../css/k/kl0r9tbks.css';
import '../../css/t/tah94fb3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ry_pmlbyo"/><path class="kl0r9tbks"/><path class="tah94fb3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:cash-payment-bill"} {...others} />);
}

export default Component;
