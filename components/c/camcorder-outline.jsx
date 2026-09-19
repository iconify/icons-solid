import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h53hy5b3q.css';
import '../../css/u/uuo7n4xwg.css';
import '../../css/n/nvwe-vbgl.css';
import '../../css/z/znan2-a4g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="h53hy5b3q"/><path clip-rule="evenodd" class="uuo7n4xwg"/><path class="nvwe-vbgl"/><path clip-rule="evenodd" class="znan2-a4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:camcorder-outline"} {...others} />);
}

export default Component;
