import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_rs8f8d.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s0rwsfbqk.css';
import '../../css/t/tsrrv4k8w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary v3_rs8f8d"/><g class="dt0cm9dhy primary"><path class="s0rwsfbqk"/><path class="tsrrv4k8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:blood-drop-duo"} {...others} />);
}

export default Component;
