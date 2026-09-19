import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nstqkuwkl.css';
import '../../css/v/vzlc76b1w.css';
import '../../css/j/j0lrf0bvw.css';
import '../../css/y/y5ojkzbkl.css';
import '../../css/c/c51t0pb6g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="nstqkuwkl"/><path class="vzlc76b1w"/><path class="j0lrf0bvw"/><path clip-rule="evenodd" class="y5ojkzbkl"/><path class="c51t0pb6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:landmark"} {...others} />);
}

export default Component;
