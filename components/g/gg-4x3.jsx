import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5vgbcb_s.css';
import '../../css/m/m8m6yp-2i.css';
import '../../css/y/yhn9evkfi.css';
import '../../css/d/ddf9bdcop.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="y5vgbcb_s"/><path class="m8m6yp-2i"/><path class="yhn9evkfi"/><path id="SVGAPx0gdzY" class="ddf9bdcop"/><use width="36" height="24" href="#SVGAPx0gdzY" transform="rotate(90 320 240)"/><use width="36" height="24" href="#SVGAPx0gdzY" transform="rotate(-90 320 240)"/><use width="36" height="24" href="#SVGAPx0gdzY" transform="rotate(180 320 240)"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:gg-4x3"} {...others} />);
}

export default Component;
