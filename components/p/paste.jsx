import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/riyq1le5g.css';
import '../../css/j/jg2d7rb2e.css';
import '../../css/h/h0hlueb4p.css';
import '../../css/q/qd5v5yp-p.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="riyq1le5g"/><path clip-rule="evenodd" class="jg2d7rb2e"/><path class="h0hlueb4p"/><rect class="qd5v5yp-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:paste"} {...others} />);
}

export default Component;
