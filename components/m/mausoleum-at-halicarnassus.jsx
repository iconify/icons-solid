import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7aoxobjl.css';
import '../../css/e/e2_v2hb1h.css';
import '../../css/l/lggd7ul4e.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="o7aoxobjl"/><path class="e2_v2hb1h"/><path class="lggd7ul4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:mausoleum-at-halicarnassus"} {...others} />);
}

export default Component;
