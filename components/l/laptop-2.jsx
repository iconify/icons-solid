import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e9wb0xb1s.css';
import '../../css/x/x2m0q9rbd.css';
import '../../css/x/xna3a80qz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e9wb0xb1s"/><path class="x2m0q9rbd"/><path class="xna3a80qz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:laptop-2"} {...others} />);
}

export default Component;
