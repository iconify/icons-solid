import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qau4bxb1f.css';
import '../../css/t/typc1sb3g.css';
import '../../css/i/iqos1m11s.css';
import '../../css/b/bwsczab2g.css';
import '../../css/r/r-1oq63yd.css';
import '../../css/q/qn2g-tb3b.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="qau4bxb1f"/><path class="typc1sb3g"/><path class="iqos1m11s"/><path class="bwsczab2g"/><path class="r-1oq63yd"/><rect class="qn2g-tb3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:shapes-bold"} {...others} />);
}

export default Component;
