import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ay7v23jbz.css';
import '../../css/l/ltw4lrqoo.css';
import '../../css/a/anx3l54he.css';
import '../../css/a/a6to1-bzk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ay7v23jbz"/><path class="ltw4lrqoo"/><path class="anx3l54he"/><path class="a6to1-bzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:scanner"} {...others} />);
}

export default Component;
