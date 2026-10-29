import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y9afhtbgn.css';
import '../../css/d/da6e_swis.css';
import '../../css/z/zdp7ykvuu.css';
import '../../css/s/skhu-cc9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-k y9afhtbgn"/><path class="da6e_swis wm-a"/><path class="zdp7ykvuu"/><path class="skhu-cc9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:drumstick"} {...others} />);
}

export default Component;
