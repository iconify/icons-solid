import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u8c8knbht.css';
import '../../css/t/tw74bkbce.css';
import '../../css/b/bctxr08co.css';
import '../../css/t/t6j4pgt5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u8c8knbht"/><path class="tw74bkbce"/><path class="bctxr08co"/><path class="t6j4pgt5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:scissors"} {...others} />);
}

export default Component;
