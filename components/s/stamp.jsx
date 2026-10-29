import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vuvr24b3y.css';
import '../../css/y/y5xaw8b8n.css';
import '../../css/e/eyr57ibcj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vuvr24b3y wm-a"/><path class="y5xaw8b8n"/><path class="eyr57ibcj wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:stamp"} {...others} />);
}

export default Component;
