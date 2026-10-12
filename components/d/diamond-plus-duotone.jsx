import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ygv4c4bdn.css';
import '../../css/n/nw4f7abft.css';
import '../../css/a/ai741630p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ygv4c4bdn"/><path class="nw4f7abft"/><path class="ai741630p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:diamond-plus-duotone"} {...others} />);
}

export default Component;
