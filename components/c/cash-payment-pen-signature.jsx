import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k958jkb2a.css';
import '../../css/y/y7sy-b8ji.css';
import '../../css/u/uu0ebebnm.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="k958jkb2a"/><path class="y7sy-b8ji"/><path class="uu0ebebnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:cash-payment-pen-signature"} {...others} />);
}

export default Component;
