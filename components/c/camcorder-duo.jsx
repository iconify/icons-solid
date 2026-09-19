import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ruunz1mfm.css';
import '../../css/n/n4d1ysgow.css';
import '../../css/s/sis5cgh5g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ruunz1mfm"/><path class="n4d1ysgow"/><path class="sis5cgh5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:camcorder-duo"} {...others} />);
}

export default Component;
