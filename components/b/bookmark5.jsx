import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvymobzlx.css';
import '../../css/z/zb6-pfbbp.css';
import '../../css/h/hntgybcog.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVG28L0ccsA" class="rvymobzlx"/><path id="SVGNbdoyehr" class="zb6-pfbbp"/></defs><g class="hntgybcog"><use href="#SVG28L0ccsA"/><use href="#SVGNbdoyehr"/><use href="#SVG28L0ccsA"/><use href="#SVGNbdoyehr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bookmark5"} {...others} />);
}

export default Component;
