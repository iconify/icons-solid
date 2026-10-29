import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/on8oj0z_t.css';
import '../../css/e/ehkxemcar.css';
import '../../css/e/e63ymzk4k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="on8oj0z_t"/><path class="ehkxemcar"/><path class="e63ymzk4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:book-marked"} {...others} />);
}

export default Component;
