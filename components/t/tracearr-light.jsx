import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9dxqwbzf.css';
import '../../css/k/kuwa1uuxb.css';
import '../../css/b/b8x4xbchh.css';
import '../../css/z/zhby1p6ga.css';
import '../../css/y/ym9-itkxz.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><path id="SVGQe9gaeLn" class="d9dxqwbzf"/></defs><path class="kuwa1uuxb"/><path class="b8x4xbchh"/><path class="zhby1p6ga"/><path class="ym9-itkxz"/><filter id="SVG9g0xNcQJ"><feGaussianBlur stdDeviation="1"/></filter><use href="#SVGQe9gaeLn" filter="url(#SVG9g0xNcQJ)"/><use href="#SVGQe9gaeLn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tracearr-light"} {...others} />);
}

export default Component;
