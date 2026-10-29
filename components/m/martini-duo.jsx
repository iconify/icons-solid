import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j0ggkhb1g.css';
import '../../css/d/d5_gd2mux.css';
import '../../css/y/yo87urbrl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="j0ggkhb1g"/><path class="d5_gd2mux wm-a"/><path class="yo87urbrl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:martini-duo"} {...others} />);
}

export default Component;
