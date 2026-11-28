import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/benk10bho.css';
import '../../css/b/b19ralbgb.css';
import '../../css/t/tocme9f-q.css';
import '../../css/m/m7hubbako.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="benk10bho"/><path class="b19ralbgb"/><path class="tocme9f-q"/><path class="m7hubbako"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:point-down"} {...others} />);
}

export default Component;
