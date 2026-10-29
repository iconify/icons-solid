import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bd3y7l5ig.css';
import '../../css/r/r_d14db1k.css';
import '../../css/s/scyd1yhxg.css';
import '../../css/y/yn913sw5o.css';
import '../../css/o/o0w51l00g.css';
import '../../css/m/mb9z_ibmv.css';
import '../../css/x/xz6xewbnf.css';
import '../../css/m/mj0r7hb8p.css';
import '../../css/o/op-176bvy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bd3y7l5ig wm-shadow"/><path class="r_d14db1k wm-k"/><path class="scyd1yhxg wm-k"/><path class="wm-k yn913sw5o"/><path class="o0w51l00g wm-k"/><path class="mb9z_ibmv wm-k"/><path class="wm-shine xz6xewbnf"/><path class="mj0r7hb8p wm-k"/><path class="op-176bvy wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:container"} {...others} />);
}

export default Component;
