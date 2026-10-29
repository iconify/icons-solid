import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/whk4pe4jr.css';
import '../../css/w/w4f1phn-n.css';
import '../../css/z/zegtxvsso.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="whk4pe4jr"/><path class="w4f1phn-n wm-a"/><path class="zegtxvsso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:burger"} {...others} />);
}

export default Component;
