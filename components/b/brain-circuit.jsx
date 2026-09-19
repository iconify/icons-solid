import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/ptaqkfbbe.css';
import '../../css/u/uv75rnbeo.css';
import '../../css/e/eg346y1on.css';
import '../../css/j/j0zs1mbsn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ptaqkfbbe"/><path class="uv75rnbeo"/><path class="eg346y1on"/><path class="j0zs1mbsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:brain-circuit"} {...others} />);
}

export default Component;
