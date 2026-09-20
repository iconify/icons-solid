import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oxb_gvhjw.css';
import '../../css/g/g3c_gibpm.css';
import '../../css/v/vlfia-hui.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="oxb_gvhjw"/><path class="g3c_gibpm"/><path class="vlfia-hui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:modern-payment-qr-basket"} {...others} />);
}

export default Component;
