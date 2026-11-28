import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/guhitdb5p.css';
import '../../css/w/w2ax0pkxd.css';
import '../../css/j/j62m-xfbf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="guhitdb5p"/><path class="w2ax0pkxd"/><path class="j62m-xfbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:vr-headset"} {...others} />);
}

export default Component;
