import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/crtxj72_r.css';
import '../../css/c/cg1uq5joa.css';
import '../../css/u/urpyplw7t.css';
import '../../css/j/jigshfz4e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="crtxj72_r wm-shadow"/><path class="cg1uq5joa wm-shadow"/><path class="urpyplw7t"/><path class="jigshfz4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:hotel"} {...others} />);
}

export default Component;
