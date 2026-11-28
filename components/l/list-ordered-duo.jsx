import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vuoqaq_eg.css';
import '../../css/e/eklyoobtc.css';
import '../../css/r/rq0ambctr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vuoqaq_eg"/><path class="eklyoobtc"/><path class="rq0ambctr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:list-ordered-duo"} {...others} />);
}

export default Component;
