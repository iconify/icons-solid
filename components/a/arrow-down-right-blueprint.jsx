import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bpsw8v14a.css';
import '../../css/u/uoytabc7k.css';
import '../../css/d/dv6985bnq.css';
import '../../css/q/qkqg5hbxb.css';
import '../../css/u/u56u56yyt.css';
import '../../css/t/t2yjpvl2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="bpsw8v14a wm-deco"/><path class="uoytabc7k wm-deco"/><path class="dv6985bnq wm-k"/><path class="qkqg5hbxb wm-a"/><path class="u56u56yyt wm-k"/><path class="t2yjpvl2n wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-down-right-blueprint"} {...others} />);
}

export default Component;
