import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g6qerqb0o.css';
import '../../css/u/u_y0o5bpw.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="cuyn6tgcc"><circle class="g6qerqb0o"/><path class="u_y0o5bpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:user-solo-fill-12"} {...others} />);
}

export default Component;
