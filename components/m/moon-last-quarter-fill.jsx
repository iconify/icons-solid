import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cb2r0lzlb.css';
import '../../css/w/wnkunhbrw.css';
import '../../css/z/zsn627f2e.css';
import '../../css/b/bk_p81bmy.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><linearGradient id="SVGHzag2jHm" x1="12482" x2="12613.8" y1="147.7" y2="376" gradientTransform="matrix(-1 0 0 1 12799.71 0)" gradientUnits="userSpaceOnUse"><stop offset="0" class="cb2r0lzlb"/><stop offset=".5" class="cb2r0lzlb"/><stop offset="1" class="wnkunhbrw"/></linearGradient></defs><path class="zsn627f2e"/><path fill="url(#SVGHzag2jHm)" class="bk_p81bmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:moon-last-quarter-fill"} {...others} />);
}

export default Component;
