import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cb2r0lzlb.css';
import '../../css/w/wnkunhbrw.css';
import '../../css/o/orirbsq5m.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><linearGradient id="SVGFxs9MdRw" x1="186" x2="326" y1="134.7" y2="377.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="cb2r0lzlb"/><stop offset=".5" class="cb2r0lzlb"/><stop offset="1" class="wnkunhbrw"/></linearGradient></defs><circle fill="url(#SVGFxs9MdRw)" class="orirbsq5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:moon-full-fill"} {...others} />);
}

export default Component;
