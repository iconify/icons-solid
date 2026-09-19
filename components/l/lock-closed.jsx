import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wq8x_6bdg.css';
import '../../css/x/xnzo5db6q.css';
import '../../css/b/bablryldg.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wq8x_6bdg"/><path class="xnzo5db6q"/><path class="bablryldg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:lock-closed"} {...others} />);
}

export default Component;
