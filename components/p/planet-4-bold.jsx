import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/najjj7l3e.css';
import '../../css/i/ih5nqwb3h.css';
import '../../css/y/yb4vsmbrg.css';
import '../../css/r/rkvyn3f3b.css';
import '../../css/z/zt6ugkboe.css';
import '../../css/j/jxgfvmbhx.css';
import '../../css/c/c_gtf3bvp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="najjj7l3e"/><path class="ih5nqwb3h"/><path class="yb4vsmbrg"/><path class="rkvyn3f3b"/><path class="zt6ugkboe"/><path class="jxgfvmbhx"/><path class="c_gtf3bvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:planet-4-bold"} {...others} />);
}

export default Component;
