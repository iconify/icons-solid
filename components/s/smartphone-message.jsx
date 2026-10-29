import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fjchxib0d.css';
import '../../css/c/c_3xvpb_l.css';
import '../../css/a/a8978jjar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fjchxib0d wm-k"/><path class="c_3xvpb_l wm-s"/><path class="a8978jjar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:smartphone-message"} {...others} />);
}

export default Component;
