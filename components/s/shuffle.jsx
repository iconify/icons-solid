import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/ry_xqo3jr.css';
import '../../css/g/gkxg7d66y.css';
import '../../css/j/je8atubjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ry_xqo3jr wm-shadow"/><path class="gkxg7d66y wm-shadow"/><path class="je8atubjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:shuffle"} {...others} />);
}

export default Component;
