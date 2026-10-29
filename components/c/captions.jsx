import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gzf0igbay.css';
import '../../css/t/tkzg87fbm.css';
import '../../css/t/tnhwrabjw.css';
import '../../css/b/bfs_c3bzd.css';
import '../../css/f/fi8pspbtq.css';
import '../../css/z/zbxk0_bid.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gzf0igbay wm-k"/><path class="tkzg87fbm wm-k"/><path class="tnhwrabjw wm-k"/><path class="bfs_c3bzd wm-shine"/><path class="fi8pspbtq wm-k"/><path class="wm-a zbxk0_bid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:captions"} {...others} />);
}

export default Component;
