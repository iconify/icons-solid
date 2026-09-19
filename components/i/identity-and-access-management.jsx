import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g446lwyem.css';
import '../../css/m/mjjfqlb2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="g446lwyem"/><path class="mjjfqlb2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:identity-and-access-management"} {...others} />);
}

export default Component;
