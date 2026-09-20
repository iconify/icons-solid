import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yfkgrtbcr.css';
import '../../css/y/yy4f622xk.css';
import '../../css/v/v8mmxpr7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yfkgrtbcr"/><path class="yy4f622xk"/><path class="v8mmxpr7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:modern-payment-self-checkout-touch"} {...others} />);
}

export default Component;
