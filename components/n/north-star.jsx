import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/eacle5s9s.css';
import '../../css/u/u0km1qbun.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="eacle5s9s"/><path class="u0km1qbun wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:north-star"} {...others} />);
}

export default Component;
