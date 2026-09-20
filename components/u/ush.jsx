import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rls8tbyvi.css';
import '../../css/s/stb4woxho.css';
import '../../css/r/rgsjgwd_l.css';
import '../../css/t/t2_lzowru.css';
import '../../css/j/ju0evpb8n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rls8tbyvi"/><path class="stb4woxho"/><path class="rgsjgwd_l"/><path class="t2_lzowru"/><path class="ju0evpb8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ush"} {...others} />);
}

export default Component;
