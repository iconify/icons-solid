import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uasldos5y.css';
import '../../css/k/k81kglbwn.css';
import '../../css/s/sa6p2-b3p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uasldos5y"/><path class="k81kglbwn"/><path class="sa6p2-b3p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:beaker-duotone"} {...others} />);
}

export default Component;
