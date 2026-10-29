import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l8wsaryhf.css';
import '../../css/o/o0pmho3fz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="l8wsaryhf"/><path class="o0pmho3fz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:binary"} {...others} />);
}

export default Component;
