import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uw1ki3rjb.css';
import '../../css/u/u_su17buu.css';
import '../../css/z/zfvkw5uxn.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uw1ki3rjb"/><path class="u_su17buu"/><path class="zfvkw5uxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:coupon-percent"} {...others} />);
}

export default Component;
