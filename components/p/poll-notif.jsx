import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uw11hvb1q.css';
import '../../css/s/slc920y5k.css';
import '../../css/z/zy99p2e9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uw11hvb1q"/><path class="slc920y5k"/><path class="zy99p2e9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:poll-notif"} {...others} />);
}

export default Component;
