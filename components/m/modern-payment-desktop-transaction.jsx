import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gbeqjcbfp.css';
import '../../css/i/i6432t0ri.css';
import '../../css/w/wgzy--bjh.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="gbeqjcbfp"/><path class="i6432t0ri"/><path class="wgzy--bjh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:modern-payment-desktop-transaction"} {...others} />);
}

export default Component;
