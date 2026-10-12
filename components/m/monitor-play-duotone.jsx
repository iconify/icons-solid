import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wi3tu6byw.css';
import '../../css/u/uzmwkhbts.css';
import '../../css/a/ajs_333_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wi3tu6byw"/><path class="uzmwkhbts"/><path clip-rule="evenodd" class="ajs_333_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:monitor-play-duotone"} {...others} />);
}

export default Component;
