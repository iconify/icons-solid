import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxe5oobko.css';
import '../../css/w/wz_eimbrd.css';
import '../../css/h/h1vbpgb6s.css';
import '../../css/y/ywjd16bsf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mxe5oobko"/><path clip-rule="evenodd" class="wz_eimbrd"/><path class="h1vbpgb6s"/><path clip-rule="evenodd" class="ywjd16bsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:virus-outline"} {...others} />);
}

export default Component;
