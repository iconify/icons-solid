import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/j/jdqvtdx7k.css';
import '../../css/p/ps97uvbkd.css';
import '../../css/o/om40t2b1b.css';
import '../../css/p/p4294ebfz.css';
import '../../css/c/c9kxv7r0x.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="jdqvtdx7k"/><path clip-rule="evenodd" class="ps97uvbkd"/><path class="om40t2b1b"/><path clip-rule="evenodd" class="p4294ebfz"/></g><path clip-rule="evenodd" class="c9kxv7r0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:pause"} {...others} />);
}

export default Component;
