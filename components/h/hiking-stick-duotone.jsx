import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnz8x09jo.css';
import '../../css/d/ddo7xcccw.css';
import '../../css/q/qjjcpxbcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pnz8x09jo"/><path class="ddo7xcccw"/><path class="qjjcpxbcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hiking-stick-duotone"} {...others} />);
}

export default Component;
