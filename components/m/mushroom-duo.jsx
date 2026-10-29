import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wgcstei8u.css';
import '../../css/t/tsi5nvbml.css';
import '../../css/i/iycs7wjzl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wgcstei8u"/><path class="tsi5nvbml wm-a"/><path class="iycs7wjzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mushroom-duo"} {...others} />);
}

export default Component;
