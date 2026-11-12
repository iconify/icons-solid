import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w183drbez.css';
import '../../css/c/ctrn9rbcn.css';
import '../../css/v/vx8zphb1a.css';
import '../../css/m/m8l6_nb5m.css';
import '../../css/f/fynjxqbnx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w183drbez"/><path class="ctrn9rbcn"/><path class="vx8zphb1a"/><path class="m8l6_nb5m"/><path class="fynjxqbnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:archiesteamfarm-dark"} {...others} />);
}

export default Component;
