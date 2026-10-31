import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vqcewgbzq.css';
import '../../css/b/bs7vqmyjm.css';
import '../../css/r/rhhhp2qhb.css';
import '../../css/x/xnm3zkbzz.css';
import '../../css/s/skq7p-b5x.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="vqcewgbzq wm-shadow"/><path class="bs7vqmyjm"/><path class="rhhhp2qhb"/><path class="xnm3zkbzz"/><path class="skq7p-b5x"/><path class="v0eyaibau wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cloud-off"} {...others} />);
}

export default Component;
