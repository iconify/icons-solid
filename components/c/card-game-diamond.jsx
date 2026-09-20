import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/r/rs5edjbjh.css';
import '../../css/k/ka0jv7b7u.css';
import '../../css/e/ej1x9gz2h.css';
import '../../css/y/yfh0lebon.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="rs5edjbjh"/><path class="ka0jv7b7u"/><path class="ej1x9gz2h"/><path class="yfh0lebon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:card-game-diamond"} {...others} />);
}

export default Component;
