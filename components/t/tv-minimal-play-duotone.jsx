import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r3e-ge5gs.css';
import '../../css/u/uzmwkhbts.css';
import '../../css/p/p1cc6mb0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r3e-ge5gs"/><path class="uzmwkhbts"/><path clip-rule="evenodd" class="p1cc6mb0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:tv-minimal-play-duotone"} {...others} />);
}

export default Component;
