import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbv3oqifg.css';
import '../../css/k/khsnsrbqk.css';
import '../../css/l/l0jqvhvwl.css';
import '../../css/e/e2spkcw7e.css';
import '../../css/l/lzd-ehbgx.css';
import '../../css/u/uwfh-jb7z.css';
import '../../css/n/n0xp22bxt.css';
import '../../css/l/ldxquk3fa.css';
import '../../css/j/jh74apb1y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mbv3oqifg"/><circle class="khsnsrbqk"/><circle class="l0jqvhvwl"/><use href="#SVGsNH4fbSG" transform="matrix(-1 0 0 1 512 0)"/><g id="SVGsNH4fbSG" class="e2spkcw7e"><path class="lzd-ehbgx"/><path class="uwfh-jb7z"/><path class="n0xp22bxt"/><path class="ldxquk3fa"/><path class="jh74apb1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:asean-1x1"} {...others} />);
}

export default Component;
