import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ug5jgqb6q.css';
import '../../css/r/r1t8jr54z.css';
import '../../css/j/jncdp9blo.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ug5jgqb6q"/><path class="r1t8jr54z"/><path class="jncdp9blo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:spa-duo"} {...others} />);
}

export default Component;
