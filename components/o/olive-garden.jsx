import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv88fpvrz.css';
import '../../css/h/h_d3dibcb.css';
import '../../css/x/xjwrp6bwe.css';

const viewBox = {"width":61,"height":41};
const content = `<defs><path id="SVG5MvoIczK" class="pv88fpvrz"/></defs><clipPath id="SVG0tiNb9Pa"><use href="#SVG5MvoIczK"/></clipPath><g clip-path="url(#SVG0tiNb9Pa)"><defs><path id="SVGX0tyeHla" class="h_d3dibcb"/></defs><clipPath id="SVGzUiBse2c"><use href="#SVGX0tyeHla"/></clipPath><path clip-path="url(#SVGzUiBse2c)" class="xjwrp6bwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:olive-garden"} {...others} />);
}

export default Component;
