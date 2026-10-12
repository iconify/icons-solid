import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cgo1yfk4r.css';
import '../../css/k/kmczsebcu.css';
import '../../css/j/j-dq22bkl.css';
import '../../css/w/w4fvxw7zn.css';
import '../../css/x/xfql-4c0p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cgo1yfk4r"/><path class="kmczsebcu"/><path class="j-dq22bkl"/><path class="w4fvxw7zn"/><path class="xfql-4c0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:baggage-claim-duotone"} {...others} />);
}

export default Component;
