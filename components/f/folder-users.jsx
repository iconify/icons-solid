import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8d3i3bwn.css';
import '../../css/z/znt9vihet.css';
import '../../css/p/p2m0nq5nm.css';
import '../../css/s/su_z13bcb.css';
import '../../css/k/kqd330_hy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q8d3i3bwn"/><path class="znt9vihet"/><path class="p2m0nq5nm"/><path class="su_z13bcb"/><path class="kqd330_hy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-users"} {...others} />);
}

export default Component;
