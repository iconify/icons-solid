import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xltvcrbmc.css';
import '../../css/w/wfvnn4b4v.css';
import '../../css/z/z19uyob6s.css';
import '../../css/o/om7eewmok.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="xltvcrbmc"/><path class="wfvnn4b4v"/><path class="z19uyob6s"/><path class="om7eewmok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:cash-payment-bill"} {...others} />);
}

export default Component;
