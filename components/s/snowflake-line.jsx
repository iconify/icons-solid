import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqn32bctm.css';
import '../../css/f/ftnakrghz.css';
import '../../css/s/s_4cbobvu.css';
import '../../css/n/n75nhmbos.css';
import '../../css/r/rs80s_b0x.css';
import '../../css/l/lul3f2btu.css';
import '../../css/a/a0i9eldci.css';
import '../../css/m/mjgoo41ai.css';
import '../../css/w/w6gm2g0ms.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 xqn32bctm"/><path class="clr-i-outline clr-i-outline-path-2 ftnakrghz"/><path class="clr-i-outline clr-i-outline-path-3 s_4cbobvu"/><path class="clr-i-outline clr-i-outline-path-4 n75nhmbos"/><path class="clr-i-outline clr-i-outline-path-5 rs80s_b0x"/><path class="clr-i-outline clr-i-outline-path-6 lul3f2btu"/><path class="a0i9eldci clr-i-outline clr-i-outline-path-7"/><path class="clr-i-outline clr-i-outline-path-8 mjgoo41ai"/><path class="clr-i-outline clr-i-outline-path-9 w6gm2g0ms"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:snowflake-line"} {...others} />);
}

export default Component;
