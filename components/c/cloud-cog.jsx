import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m2ebxhp-u.css';
import '../../css/w/w199b4q7i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="m2ebxhp-u"/><path class="w199b4q7i wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-cog"} {...others} />);
}

export default Component;
