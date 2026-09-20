import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hztioccen.css';
import '../../css/r/rsxrr07th.css';
import '../../css/a/amzcxkbhq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hztioccen"/><path class="rsxrr07th"/><path clip-rule="evenodd" class="amzcxkbhq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:card-game-card-spade"} {...others} />);
}

export default Component;
