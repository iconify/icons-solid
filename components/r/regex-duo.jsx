import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m1ox2hhhb.css';
import '../../css/l/l-if2ibsb.css';
import '../../css/a/a74ox2l4b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="m1ox2hhhb"/><path class="l-if2ibsb wm-a"/><path class="a74ox2l4b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:regex-duo"} {...others} />);
}

export default Component;
