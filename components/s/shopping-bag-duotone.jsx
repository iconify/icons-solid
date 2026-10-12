import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rg3c-hb8r.css';
import '../../css/q/qbkn2frqz.css';
import '../../css/d/d2hyv4llv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rg3c-hb8r"/><path class="qbkn2frqz"/><path class="d2hyv4llv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:shopping-bag-duotone"} {...others} />);
}

export default Component;
