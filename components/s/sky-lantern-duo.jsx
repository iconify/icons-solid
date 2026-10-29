import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m3r3mjbtg.css';
import '../../css/w/w7qq1ntbn.css';
import '../../css/z/z8twkcj3l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="m3r3mjbtg"/><path class="w7qq1ntbn"/><path class="wm-a z8twkcj3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sky-lantern-duo"} {...others} />);
}

export default Component;
