import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gp85gwbra.css';
import '../../css/q/qyyu2yb2d.css';
import '../../css/r/r78zmwqyy.css';
import '../../css/y/yy9wzccis.css';
import '../../css/q/q8lov615x.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gp85gwbra"/><path class="qyyu2yb2d"/><path class="r78zmwqyy"/><path class="yy9wzccis"/><path clip-rule="evenodd" class="q8lov615x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:tools"} {...others} />);
}

export default Component;
