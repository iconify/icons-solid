import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ammxg4bjk.css';
import '../../css/a/ah6sqybwi.css';
import '../../css/z/zec44e7ke.css';
import '../../css/w/wppt0-b2x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ammxg4bjk"/><path class="ah6sqybwi"/><path class="zec44e7ke"/><path class="wppt0-b2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:gift-card"} {...others} />);
}

export default Component;
