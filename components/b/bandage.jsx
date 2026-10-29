import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/adnxrhb5g.css';
import '../../css/p/p43mkbb9d.css';
import '../../css/y/y-xkudbrq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="adnxrhb5g"/><path class="p43mkbb9d wm-a"/><path class="wm-a y-xkudbrq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bandage"} {...others} />);
}

export default Component;
