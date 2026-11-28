import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hhw-sxbck.css';
import '../../css/e/eoonfgcbu.css';
import '../../css/j/jjxa_gbov.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="hhw-sxbck"/><path class="eoonfgcbu"/><path class="jjxa_gbov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bluetooth-connected-duo"} {...others} />);
}

export default Component;
