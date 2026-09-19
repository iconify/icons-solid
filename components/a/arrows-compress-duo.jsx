import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gug69t_6f.css';
import '../../css/y/y1yy6tysq.css';
import '../../css/x/x7kt41b5x.css';
import '../../css/y/yng-3ibpc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="gug69t_6f"/><path class="y1yy6tysq"/><path class="x7kt41b5x"/><path class="yng-3ibpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:arrows-compress-duo"} {...others} />);
}

export default Component;
