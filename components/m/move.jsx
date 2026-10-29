import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u1of9ltii.css';
import '../../css/n/ngurz8bhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="u1of9ltii"/><path class="ngurz8bhm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:move"} {...others} />);
}

export default Component;
