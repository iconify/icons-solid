import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/o3u_lwbit.css';
import '../../css/a/abl_1jb3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="o3u_lwbit"/><path class="abl_1jb3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-merge-conflict-sharp-duotone"} {...others} />);
}

export default Component;
