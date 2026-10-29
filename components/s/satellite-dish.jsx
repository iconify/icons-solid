import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yk6pw_bfq.css';
import '../../css/k/kro82vbrq.css';
import '../../css/g/g6o8xobrr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yk6pw_bfq"/><path class="kro82vbrq wm-a"/><path class="g6o8xobrr wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:satellite-dish"} {...others} />);
}

export default Component;
