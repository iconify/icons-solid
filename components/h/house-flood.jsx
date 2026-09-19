import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hj19qlbev.css';
import '../../css/x/xej447bav.css';
import '../../css/w/w19rbqhzk.css';
import '../../css/a/ahri7xbzg.css';
import '../../css/x/x1jbzxbbd.css';
import '../../css/u/udmqws72h.css';
import '../../css/f/flf--gbei.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hj19qlbev"/><path class="xej447bav"/><path class="w19rbqhzk"/><path clip-rule="evenodd" class="ahri7xbzg"/><path class="x1jbzxbbd"/><path class="udmqws72h"/><rect class="flf--gbei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:house-flood"} {...others} />);
}

export default Component;
