import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bsusqz6jj.css';
import '../../css/r/rfa47j6vc.css';
import '../../css/d/d-n5niaps.css';
import '../../css/i/iix9hwazr.css';
import '../../css/z/ziff9d-lx.css';
import '../../css/w/w8taj1bhx.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><path id="SVGDp62uefI" class="bsusqz6jj"/></defs><path class="rfa47j6vc"/><path class="d-n5niaps"/><path class="iix9hwazr"/><path class="ziff9d-lx"/><path class="w8taj1bhx"/><filter id="SVG9g0xNcQJ"><feGaussianBlur stdDeviation="1"/></filter><use href="#SVGDp62uefI" filter="url(#SVG9g0xNcQJ)"/><use href="#SVGDp62uefI"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tracearr"} {...others} />);
}

export default Component;
