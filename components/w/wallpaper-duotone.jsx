import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k83okfbmc.css';
import '../../css/u/uqkidpb9y.css';
import '../../css/q/qazk61bhi.css';
import '../../css/c/c6lx5ub6a.css';
import '../../css/u/uzmwkhbts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k83okfbmc"/><path class="uqkidpb9y"/><path class="qazk61bhi"/><path class="c6lx5ub6a"/><path class="uzmwkhbts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:wallpaper-duotone"} {...others} />);
}

export default Component;
