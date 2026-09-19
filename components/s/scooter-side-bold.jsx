import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f12w4dbvr.css';
import '../../css/h/hqiubxb6c.css';
import '../../css/i/ii92e0b8g.css';
import '../../css/s/sjzpytnux.css';
import '../../css/d/dpknjbccx.css';
import '../../css/p/pgmlw78hs.css';
import '../../css/d/d8e89ybho.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="f12w4dbvr"/><path clip-rule="evenodd" class="hqiubxb6c"/><path class="ii92e0b8g"/><rect class="sjzpytnux"/><path class="dpknjbccx"/><path class="pgmlw78hs"/><path class="d8e89ybho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:scooter-side-bold"} {...others} />);
}

export default Component;
