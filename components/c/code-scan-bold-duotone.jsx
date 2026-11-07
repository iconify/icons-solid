import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/u/u_3psfbjy.css';
import '../../css/v/vtko2zsbn.css';
import '../../css/m/mrbd1vqmu.css';
import '../../css/l/l-i-4twyo.css';
import '../../css/a/a7ch850_f.css';
import '../../css/z/zrsbmnbvs.css';
import '../../css/u/ufxh75keq.css';
import '../../css/v/vuh948bbg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="u_3psfbjy"/><path class="vtko2zsbn"/><path class="mrbd1vqmu"/><path class="l-i-4twyo"/></g><path class="a7ch850_f"/><path class="zrsbmnbvs"/><path class="ufxh75keq"/><path class="vuh948bbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:code-scan-bold-duotone"} {...others} />);
}

export default Component;
