import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/e/e1wyg2csk.css';
import '../../css/y/yo27kfb1y.css';
import '../../css/d/dbcx10b6c.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="e1wyg2csk"/><path class="yo27kfb1y"/><path class="dbcx10b6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:unlink"} {...others} />);
}

export default Component;
