import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r7uirtbqq.css';
import '../../css/z/zu3o5j6at.css';
import '../../css/x/x_ryngbas.css';
import '../../css/p/p0k_gwbnv.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r7uirtbqq"/><path class="zu3o5j6at"/><path class="x_ryngbas"/><path class="p0k_gwbnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:help-headphones-customer-support-human"} {...others} />);
}

export default Component;
