import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/egwlkdb6n.css';
import '../../css/k/k05fspbzc.css';
import '../../css/n/nm-qj_bex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="egwlkdb6n"/><path class="k05fspbzc wm-a"/><path class="nm-qj_bex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-ghost-duo"} {...others} />);
}

export default Component;
