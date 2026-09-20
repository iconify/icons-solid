import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vo2zbvecc.css';
import '../../css/z/z49wz6bue.css';
import '../../css/c/ce6ok6s3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vo2zbvecc"/><path class="z49wz6bue"/><path class="ce6ok6s3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:laptop-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
