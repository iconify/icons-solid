import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s2gz3mbzi.css';
import '../../css/m/mexbxv5go.css';
import '../../css/s/s53jcxmyz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="s2gz3mbzi"/><path class="mexbxv5go wm-a"/><path class="s53jcxmyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:fence-duo"} {...others} />);
}

export default Component;
