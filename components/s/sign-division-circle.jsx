import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/u/u-bwlaclv.css';
import '../../css/t/t7kbs74kt.css';
import '../../css/k/kvgksqi2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><circle class="u-bwlaclv"/><path class="t7kbs74kt"/><path class="kvgksqi2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-division-circle"} {...others} />);
}

export default Component;
