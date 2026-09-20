import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/in2n-m-tn.css';
import '../../css/x/xz1mt0bfe.css';
import '../../css/f/fn51gwbqa.css';
import '../../css/d/dxfe2ng1m.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="in2n-m-tn"/><path class="xz1mt0bfe"/><path class="fn51gwbqa"/><path class="dxfe2ng1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:modern-payment-self-checkout-touch"} {...others} />);
}

export default Component;
