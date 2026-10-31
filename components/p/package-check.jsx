import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m0vd91blt.css';
import '../../css/a/al0e0qbeh.css';
import '../../css/j/ji2wu1bsk.css';
import '../../css/r/rrbd_5b8a.css';
import '../../css/t/tc27knbqs.css';
import '../../css/w/w076lzbpf.css';
import '../../css/n/nihxvlbgt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="m0vd91blt wm-shadow"/><path class="al0e0qbeh"/><path class="ji2wu1bsk"/><path class="rrbd_5b8a"/><path class="tc27knbqs"/><path class="w076lzbpf"/><path class="nihxvlbgt wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:package-check"} {...others} />);
}

export default Component;
