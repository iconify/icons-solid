import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/p0a84fdjs.css';
import '../../css/t/tmm-wxbqr.css';
import '../../css/a/a-c93bb9g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="p0a84fdjs wm-shadow"/><path class="tmm-wxbqr wm-shadow"/><path class="a-c93bb9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:superscript"} {...others} />);
}

export default Component;
