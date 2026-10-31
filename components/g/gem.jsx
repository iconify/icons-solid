import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/u/uenju7b2t.css';
import '../../css/x/xap4q3div.css';
import '../../css/s/sv4c3vbym.css';
import '../../css/x/x1twz_bed.css';
import '../../css/z/z5qsc6boq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="uenju7b2t"/><path class="wm-shine xap4q3div"/><path class="sv4c3vbym wm-k"/><path class="wm-a x1twz_bed"/><path class="wm-deco z5qsc6boq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:gem"} {...others} />);
}

export default Component;
