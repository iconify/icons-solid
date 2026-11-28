import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tl3hxibei.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/van__r8hm.css';
import '../../css/d/dutg3fb-n.css';
import '../../css/a/a09iknzhm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary tl3hxibei"/><g class="dt0cm9dhy primary"><path class="van__r8hm"/><path class="dutg3fb-n"/><path class="a09iknzhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:instagram-duo"} {...others} />);
}

export default Component;
