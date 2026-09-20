import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/us3uf0o7r.css';
import '../../css/f/f5_w3wu9l.css';
import '../../css/l/libu0wbyd.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="us3uf0o7r"/><path class="f5_w3wu9l"/><path class="libu0wbyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:video-game-breakout"} {...others} />);
}

export default Component;
