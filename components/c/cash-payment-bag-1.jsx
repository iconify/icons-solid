import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wgum6wtue.css';
import '../../css/d/d30dd2pkp.css';
import '../../css/g/g4-pf7_je.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="wgum6wtue"/><path class="d30dd2pkp"/><path class="g4-pf7_je"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:cash-payment-bag-1"} {...others} />);
}

export default Component;
