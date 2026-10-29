import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h3i5jzqgi.css';
import '../../css/f/flmaa1cdw.css';
import '../../css/f/fi6ymy76n.css';
import '../../css/s/s2tcdvqcr.css';
import '../../css/y/yo24_wbnp.css';
import '../../css/s/scjhk_bvh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h3i5jzqgi wm-k"/><path class="flmaa1cdw wm-k"/><path class="fi6ymy76n wm-k"/><path class="s2tcdvqcr wm-a"/><path class="wm-a yo24_wbnp"/><path class="scjhk_bvh wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:arrow-down-to-line"} {...others} />);
}

export default Component;
