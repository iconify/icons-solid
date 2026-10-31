import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/h/hgwug2bnk.css';
import '../../css/q/qtg8zx4bf.css';
import '../../css/m/mrbc7qs-t.css';
import '../../css/j/j37c12bko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGlC3NZd5f" x1="9.01" x2="15.01" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGlC3NZd5f)" class="hgwug2bnk"/><path class="qtg8zx4bf wm-shine"/><path class="mrbc7qs-t wm-shine"/><path class="j37c12bko wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:captions"} {...others} />);
}

export default Component;
