import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wlah1cbhg.css';
import '../../css/r/rhsxb9bdp.css';
import '../../css/h/husi78b2l.css';
import '../../css/x/xfyd-ebwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wlah1cbhg"/><path class="rhsxb9bdp"/><path class="husi78b2l"/><path class="xfyd-ebwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:list-checks-duo"} {...others} />);
}

export default Component;
