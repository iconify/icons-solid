import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u8djjoheg.css';
import '../../css/m/mqfx5dq5o.css';
import '../../css/w/w9pcj6b5h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="u8djjoheg"/><path class="mqfx5dq5o wm-a"/><path class="w9pcj6b5h wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:notebook-pen"} {...others} />);
}

export default Component;
