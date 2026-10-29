import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bibpy9bpq.css';
import '../../css/r/rs77v00pn.css';
import '../../css/i/i5ws0vb4s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="bibpy9bpq"/><path class="rs77v00pn"/><path class="i5ws0vb4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:face-mask"} {...others} />);
}

export default Component;
