import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewi2z1bdf.css';
import '../../css/w/wi2dxbbsx.css';
import '../../css/w/w-q9khbce.css';
import '../../css/o/o5ajpab6k.css';
import '../../css/k/kf6wa5b6m.css';
import '../../css/h/hcdcwlgkp.css';
import '../../css/v/v80d3ynpv.css';
import '../../css/r/rs6_twyik.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="ewi2z1bdf"/><path class="wi2dxbbsx"/><path class="w-q9khbce"/><path class="o5ajpab6k"/><path class="kf6wa5b6m"/><path class="hcdcwlgkp"/><path class="v80d3ynpv"/><path class="rs6_twyik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:niue"} {...others} />);
}

export default Component;
