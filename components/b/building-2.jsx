import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aw36prbuq.css';
import '../../css/g/g6t5hyj9f.css';
import '../../css/l/lo8z_s-pm.css';
import '../../css/h/hgn9uo92a.css';
import '../../css/u/ukkv-sj3o.css';
import '../../css/m/m04eombrt.css';
import '../../css/c/czn8o614p.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="aw36prbuq"/><path class="g6t5hyj9f"/><path class="lo8z_s-pm"/><path class="hgn9uo92a"/><path class="ukkv-sj3o"/><path class="m04eombrt"/><path clip-rule="evenodd" class="czn8o614p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:building-2"} {...others} />);
}

export default Component;
