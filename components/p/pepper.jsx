import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vo63m3oqb.css';
import '../../css/r/r0tqvkbaf.css';
import '../../css/e/e1pgmrb2h.css';
import '../../css/b/bc6i-i1_q.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="vo63m3oqb"/><path class="r0tqvkbaf"/><circle class="e1pgmrb2h"/><path class="bc6i-i1_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:pepper"} {...others} />);
}

export default Component;
