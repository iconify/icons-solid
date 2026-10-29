import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cofdlhb9e.css';
import '../../css/i/iawhcvb9q.css';
import '../../css/n/nqv3_-b2b.css';
import '../../css/x/xfzl-hl3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="cofdlhb9e"/><path class="iawhcvb9q"/><path class="nqv3_-b2b"/><path class="xfzl-hl3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:mehndi-hand"} {...others} />);
}

export default Component;
