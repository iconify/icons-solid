import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgf-n5bxk.css';
import '../../css/n/nxrmpbcie.css';
import '../../css/y/y7sd_zbkb.css';
import '../../css/w/wvcv5vi_r.css';
import '../../css/a/akbei19fa.css';
import '../../css/s/seyluta_h.css';
import '../../css/r/r_0tfkb6a.css';
import '../../css/l/lqxzadb-e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cgf-n5bxk"/><path class="nxrmpbcie"/><path class="y7sd_zbkb"/><path class="wvcv5vi_r"/><path class="akbei19fa"/><path class="seyluta_h"/><path class="r_0tfkb6a"/><path class="lqxzadb-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:partypopper"} {...others} />);
}

export default Component;
