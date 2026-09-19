import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ngehmsigm.css';
import '../../css/k/k44e6hbrh.css';
import '../../css/x/x2xhq2bdm.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><rect class="ngehmsigm"/><path clip-rule="evenodd" class="k44e6hbrh"/><path class="x2xhq2bdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:leave-print"} {...others} />);
}

export default Component;
