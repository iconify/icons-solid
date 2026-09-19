import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2g2lsb9m.css';
import '../../css/y/yumusomwv.css';
import '../../css/r/rhr2acc-n.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="n2g2lsb9m"/><path class="yumusomwv"/><path class="rhr2acc-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:battery-75-duo"} {...others} />);
}

export default Component;
