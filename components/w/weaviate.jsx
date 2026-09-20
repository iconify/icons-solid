import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f62h4o07s.css';
import '../../css/z/zyth7il_w.css';
import '../../css/b/baofe4k9o.css';

const viewBox = {"width":122,"height":18};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGVf6MUKlO)" class="f62h4o07s"/><defs><linearGradient id="SVGVf6MUKlO" x1="5.605" x2="17.15" y1="0" y2="22.618" gradientUnits="userSpaceOnUse"><stop class="zyth7il_w"/><stop offset="1" class="baofe4k9o"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:weaviate"} {...others} />);
}

export default Component;
