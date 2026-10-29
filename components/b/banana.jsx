import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/is8p2nbel.css';
import '../../css/r/r35bzkbxd.css';
import '../../css/w/wl97hswxc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="is8p2nbel"/><path class="r35bzkbxd"/><path class="wl97hswxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:banana"} {...others} />);
}

export default Component;
