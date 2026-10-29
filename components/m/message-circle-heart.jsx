import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gowtob5ay.css';
import '../../css/t/tnssx_b0t.css';
import '../../css/z/z_nuy_bbs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="gowtob5ay"/><path class="tnssx_b0t"/><path class="z_nuy_bbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:message-circle-heart"} {...others} />);
}

export default Component;
