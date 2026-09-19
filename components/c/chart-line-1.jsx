import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lqujkybpc.css';
import '../../css/m/mysunmbhd.css';
import '../../css/j/jz39trb1d.css';

const viewBox = {"width":80,"height":81};
const content = `<g class="ft5dv1b6b"><path class="lqujkybpc"/><path class="mysunmbhd"/><path class="jz39trb1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:chart-line-1"} {...others} />);
}

export default Component;
