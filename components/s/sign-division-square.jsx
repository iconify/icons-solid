import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/k/k5q4ew3vv.css';
import '../../css/e/e_noebb3m.css';
import '../../css/k/kvgksqi2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="k5q4ew3vv"/><path class="e_noebb3m"/><path class="kvgksqi2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-division-square"} {...others} />);
}

export default Component;
