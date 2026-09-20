import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rn_0s_bdl.css';
import '../../css/r/rzq8dvbgl.css';
import '../../css/q/q1ijj6hsl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rn_0s_bdl"/><path class="rzq8dvbgl"/><path class="q1ijj6hsl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:board-game-jenga"} {...others} />);
}

export default Component;
