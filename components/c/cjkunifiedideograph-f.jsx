import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtt0z_z2x.css';
import '../../css/n/nfgkwnbpu.css';
import '../../css/r/r2qvipbzj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xtt0z_z2x"/><path class="nfgkwnbpu"/><path class="r2qvipbzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:cjkunifiedideograph-f"} {...others} />);
}

export default Component;
