import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x40noxwfi.css';
import '../../css/c/cokb7abfu.css';
import '../../css/y/yh5hycbni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="x40noxwfi"/><path class="cokb7abfu"/><path class="yh5hycbni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-bear"} {...others} />);
}

export default Component;
