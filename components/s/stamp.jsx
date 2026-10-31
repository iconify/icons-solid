import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y70uvobzb.css';
import '../../css/t/tgddnbvvm.css';
import '../../css/u/umueoon4l.css';
import '../../css/k/ky6e2lbaq.css';
import '../../css/v/vqq-je3nh.css';
import '../../css/v/v2thwlyeg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow y70uvobzb"/><path class="tgddnbvvm"/><path class="umueoon4l"/><path class="ky6e2lbaq"/><path class="vqq-je3nh"/><path class="v2thwlyeg wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:stamp"} {...others} />);
}

export default Component;
