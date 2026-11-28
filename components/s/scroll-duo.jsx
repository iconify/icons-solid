import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q03ucebpy.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fcfupcc6q.css';
import '../../css/u/u0xwubkjf.css';
import '../../css/c/cut121afa.css';
import '../../css/c/cdyhiybrh.css';
import '../../css/x/xj97x-blp.css';
import '../../css/o/ohnrqjbnx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q03ucebpy secondary"/><g class="dt0cm9dhy primary"><path class="fcfupcc6q"/><path class="u0xwubkjf"/><path class="cut121afa"/><path class="cdyhiybrh"/><path class="xj97x-blp"/><path class="ohnrqjbnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:scroll-duo"} {...others} />);
}

export default Component;
