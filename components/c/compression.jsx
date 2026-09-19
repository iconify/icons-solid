import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gmten56ow.css';
import '../../css/m/msp6zgqxp.css';
import '../../css/y/y5r4bqbtt.css';
import '../../css/b/b0c1aeb5t.css';
import '../../css/y/ybxb_8rls.css';
import '../../css/s/sr9fdqblm.css';
import '../../css/x/xw_4h71-f.css';
import '../../css/z/zfjw_gj0r.css';
import '../../css/s/s2-z_jbjg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gmten56ow"/><path class="msp6zgqxp"/><path class="y5r4bqbtt"/><path class="b0c1aeb5t"/><path class="ybxb_8rls"/><path class="sr9fdqblm"/><path class="xw_4h71-f"/><path class="zfjw_gj0r"/><path class="s2-z_jbjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:compression"} {...others} />);
}

export default Component;
