import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/svzmf890z.css';
import '../../css/a/au7purbjv.css';
import '../../css/y/yv6k48j-s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="svzmf890z"/><path class="au7purbjv"/><path class="yv6k48j-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-cat"} {...others} />);
}

export default Component;
