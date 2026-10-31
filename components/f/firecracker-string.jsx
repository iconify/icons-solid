import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wjb1pxq6i.css';
import '../../css/m/mtcm9ky7m.css';
import '../../css/x/xbywnw3_y.css';
import '../../css/t/tiyiqikmg.css';
import '../../css/j/jn1ozccmg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wjb1pxq6i wm-shadow"/><path class="mtcm9ky7m"/><path class="xbywnw3_y"/><path class="tiyiqikmg"/><path class="jn1ozccmg wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:firecracker-string"} {...others} />);
}

export default Component;
