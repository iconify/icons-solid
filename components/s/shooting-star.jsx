import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9-npja8x.css';
import '../../css/v/v_1e9zypo.css';
import '../../css/r/refjdabcw.css';
import '../../css/l/lbontmtwt.css';
import '../../css/k/km5cwfbyq.css';
import '../../css/z/zfrb92bgc.css';
import '../../css/g/gaew_9bea.css';
import '../../css/q/qgkgg6btv.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVGAv1zQcQS" cx="121.2" cy="50.2" r="78.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="s9-npja8x"/><stop offset=".85" class="v_1e9zypo"/><stop offset="1" class="v_1e9zypo"/></radialGradient></defs><path class="refjdabcw"/><path class="lbontmtwt"/><path class="km5cwfbyq"/><path fill="url(#SVGAv1zQcQS)" transform="matrix(2.5 0 0 2.5 9.139 -11.571)" class="zfrb92bgc"/><path class="gaew_9bea"/><path class="qgkgg6btv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:shooting-star"} {...others} />);
}

export default Component;
