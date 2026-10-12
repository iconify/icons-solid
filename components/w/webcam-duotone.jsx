import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p2wr1lf8y.css';
import '../../css/n/n33v813cm.css';
import '../../css/u/uvm1-pvtu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p2wr1lf8y"/><path class="n33v813cm"/><path clip-rule="evenodd" class="uvm1-pvtu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:webcam-duotone"} {...others} />);
}

export default Component;
