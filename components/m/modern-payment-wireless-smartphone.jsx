import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hoaaswixn.css';
import '../../css/u/ur_z-2b_k.css';
import '../../css/y/yk6pcp28q.css';
import '../../css/h/hlmw3rb0w.css';
import '../../css/b/b25kv6bcb.css';
import '../../css/i/iwtmg7hsa.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="hoaaswixn"/><path class="ur_z-2b_k"/><path class="yk6pcp28q"/><path class="hlmw3rb0w"/><path class="b25kv6bcb"/><path class="iwtmg7hsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:modern-payment-wireless-smartphone"} {...others} />);
}

export default Component;
