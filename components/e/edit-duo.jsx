import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uoqmh3b_g.css';
import '../../css/b/b9iiq2beg.css';
import '../../css/v/vyfqjvtfg.css';
import '../../css/j/jefzkbbic.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="uoqmh3b_g"/><path class="b9iiq2beg wm-a"/><path class="vyfqjvtfg"/><path class="jefzkbbic wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:edit-duo"} {...others} />);
}

export default Component;
