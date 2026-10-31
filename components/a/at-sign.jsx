import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4hnscc4t.css';
import '../../css/u/up5adhcwo.css';
import '../../css/e/eu71eo3pf.css';
import '../../css/h/hjskit52j.css';
import '../../css/m/mmf-ceb-u.css';
import '../../css/x/xd8o7hb4w.css';
import '../../css/r/rrtfk_bzk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k4hnscc4t wm-shadow"/><path class="up5adhcwo"/><path class="eu71eo3pf"/><path class="hjskit52j"/><path class="mmf-ceb-u"/><path class="xd8o7hb4w"/><path class="rrtfk_bzk wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:at-sign"} {...others} />);
}

export default Component;
