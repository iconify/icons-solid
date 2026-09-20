import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmiofab5j.css';
import '../../css/x/x4u8pbwjc.css';
import '../../css/x/x2x85b5id.css';
import '../../css/r/rotlayqdz.css';
import '../../css/r/rx8m0hbpq.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/a/ac18otbyb.css';
import '../../css/l/l9ooms9ig.css';
import '../../css/m/m5zmhq_bz.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="rmiofab5j"/><g class="x4u8pbwjc"><path class="x2x85b5id"/><circle class="rotlayqdz"/><circle class="rx8m0hbpq"/></g><g class="jn8qy4bru"><path class="ac18otbyb"/><path class="l9ooms9ig"/><circle class="rotlayqdz"/><circle class="m5zmhq_bz"/><circle class="rx8m0hbpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:assembly-group"} {...others} />);
}

export default Component;
