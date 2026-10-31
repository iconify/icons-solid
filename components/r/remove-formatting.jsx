import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/j/j228zvhkh.css';
import '../../css/s/sr76akz3u.css';
import '../../css/j/jwrhcybbb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGoxbbFezL" x1="9" x2="15" y1="3" y2="21.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGoxbbFezL)" class="j228zvhkh"/><path class="sr76akz3u wm-s"/><path class="jwrhcybbb wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:remove-formatting"} {...others} />);
}

export default Component;
