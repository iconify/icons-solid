import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nm-qj_bex.css';
import '../../css/k/k05fspbzc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="nm-qj_bex"/><path class="k05fspbzc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-ghost"} {...others} />);
}

export default Component;
