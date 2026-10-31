import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/ue4mmpb5y.css';
import '../../css/k/k-xhdrb-y.css';
import '../../css/q/q4f-z41uy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ue4mmpb5y wm-shadow"/><path class="k-xhdrb-y"/><path class="q4f-z41uy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:download"} {...others} />);
}

export default Component;
