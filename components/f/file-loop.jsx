import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/q/qr1bpobly.css';
import '../../css/c/cn44c1b0j.css';
import '../../css/f/fa8gkmu7f.css';
import '../../css/t/twxegabhu.css';
import '../../css/v/v-r-1wylh.css';
import '../../css/j/j3fehb30k.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="qr1bpobly"/><path clip-rule="evenodd" class="cn44c1b0j"/><path class="fa8gkmu7f"/><path clip-rule="evenodd" class="twxegabhu"/></g><path clip-rule="evenodd" class="v-r-1wylh"/><path clip-rule="evenodd" class="j3fehb30k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:file-loop"} {...others} />);
}

export default Component;
