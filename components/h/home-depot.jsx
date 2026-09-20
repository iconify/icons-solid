import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f5mtcdbpm.css';
import '../../css/k/k59-kw8vi.css';
import '../../css/p/p_x7miasa.css';
import '../../css/h/h734a6bjw.css';
import '../../css/r/r-7p2ab6x.css';
import '../../css/r/rk7-b4w8q.css';

const viewBox = {"width":227,"height":228};
const content = `<g class="ft5dv1b6b"><path class="f5mtcdbpm"/><path class="k59-kw8vi"/><path class="p_x7miasa"/><path class="h734a6bjw"/><path class="r-7p2ab6x"/><path class="rk7-b4w8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:home-depot"} {...others} />);
}

export default Component;
