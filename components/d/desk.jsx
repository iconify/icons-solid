import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g7-7g636e.css';
import '../../css/j/jw3axbcbb.css';
import '../../css/p/pb9qdmbcb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g7-7g636e"/><path class="jw3axbcbb"/><path class="pb9qdmbcb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:desk"} {...others} />);
}

export default Component;
