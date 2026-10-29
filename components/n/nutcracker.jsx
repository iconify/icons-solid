import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d6m0ygb_d.css';
import '../../css/e/eix4t5ldq.css';
import '../../css/g/gxc2-r5ol.css';
import '../../css/s/sq0dhbcwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="d6m0ygb_d wm-k"/><path class="eix4t5ldq wm-a"/><path class="gxc2-r5ol"/><path class="sq0dhbcwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:nutcracker"} {...others} />);
}

export default Component;
