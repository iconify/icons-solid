import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p-n3c_6jj.css';
import '../../css/e/e273j40pi.css';
import '../../css/t/ti8_utzrk.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p-n3c_6jj"/><path class="e273j40pi"/><path class="ti8_utzrk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-large-3-outline"} {...others} />);
}

export default Component;
