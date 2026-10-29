import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/flxbooo2l.css';
import '../../css/u/u5k-jlbkg.css';
import '../../css/v/vgfot6b_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="flxbooo2l"/><path class="u5k-jlbkg wm-a"/><path class="vgfot6b_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gingerbread-man-duo"} {...others} />);
}

export default Component;
