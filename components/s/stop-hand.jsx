import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fl7ncac3m.css';
import '../../css/f/f8cw07bfb.css';
import '../../css/s/sgba66btq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fl7ncac3m"/><path class="f8cw07bfb"/><path clip-rule="evenodd" class="sgba66btq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:stop-hand"} {...others} />);
}

export default Component;
