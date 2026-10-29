import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/exb76317f.css';
import '../../css/f/fjrp7734d.css';
import '../../css/s/sn07vob-o.css';
import '../../css/k/kxglrppal.css';
import '../../css/h/hcxrx_4kl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="exb76317f"/><path class="fjrp7734d"/><path class="sn07vob-o"/><path class="kxglrppal"/><path class="hcxrx_4kl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-man"} {...others} />);
}

export default Component;
