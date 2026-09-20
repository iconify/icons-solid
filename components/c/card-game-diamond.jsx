import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bal25inyd.css';
import '../../css/m/mpn62ab2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bal25inyd"/><path class="mpn62ab2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:card-game-diamond"} {...others} />);
}

export default Component;
