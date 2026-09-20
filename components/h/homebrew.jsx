import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rcstzfbcb.css';
import '../../css/k/kosow7izm.css';
import '../../css/f/fav9ajbay.css';
import '../../css/d/d5e8mpb5y.css';
import '../../css/c/chdcihjie.css';
import '../../css/y/y4k01f_dy.css';
import '../../css/a/ar0qb6ayo.css';

const viewBox = {"width":164,"height":256};
const content = `<path class="rcstzfbcb"/><path class="kosow7izm"/><path class="fav9ajbay"/><path class="d5e8mpb5y"/><path class="chdcihjie"/><path class="y4k01f_dy"/><path class="ar0qb6ayo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:homebrew"} {...others} />);
}

export default Component;
