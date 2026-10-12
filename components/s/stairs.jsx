import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yqzauib6f.css';
import '../../css/r/rqkderbfe.css';
import '../../css/i/i8r3pbcwv.css';
import '../../css/e/e1mp8kbsg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yqzauib6f"/><path class="rqkderbfe"/><path class="i8r3pbcwv"/><path class="e1mp8kbsg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:stairs"} {...others} />);
}

export default Component;
