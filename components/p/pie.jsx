import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lhdaxjb-g.css';
import '../../css/x/xd7jxwbfm.css';
import '../../css/b/b76gjed0b.css';
import '../../css/j/jr5c1hbhg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lhdaxjb-g"/><path class="xd7jxwbfm"/><path class="b76gjed0b"/><path class="jr5c1hbhg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pie"} {...others} />);
}

export default Component;
