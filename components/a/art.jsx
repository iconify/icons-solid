import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkyndlbkc.css';
import '../../css/e/effisz2bi.css';
import '../../css/t/tk523yb6x.css';
import '../../css/e/e0njhxhra.css';
import '../../css/z/z-jx5vx8z.css';
import '../../css/z/zx1nlebze.css';
import '../../css/t/t93l4db8t.css';
import '../../css/w/wqhd12bcr.css';
import '../../css/h/h-ya8sbqc.css';
import '../../css/a/asd3x_b_z.css';
import '../../css/r/rw2lj8p-p.css';
import '../../css/v/vu18cjo8c.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="lkyndlbkc"/><defs><circle id="SVGifCBlePx" class="effisz2bi"/></defs><clipPath id="SVGtcVZrdEc"><use href="#SVGifCBlePx"/></clipPath><g clip-path="url(#SVGtcVZrdEc)"><path class="tk523yb6x"/><path class="e0njhxhra"/><path class="z-jx5vx8z"/><path class="zx1nlebze"/><circle class="t93l4db8t"/><circle class="wqhd12bcr"/><circle class="h-ya8sbqc"/><path class="asd3x_b_z"/><path class="rw2lj8p-p"/><path class="vu18cjo8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:art"} {...others} />);
}

export default Component;
