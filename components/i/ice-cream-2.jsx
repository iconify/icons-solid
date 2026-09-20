import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ouuhmis4d.css';
import '../../css/q/qlvujdg_q.css';
import '../../css/x/x__3be8dp.css';
import '../../css/o/ozp46jb5q.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ouuhmis4d"/><path class="qlvujdg_q"/><path class="x__3be8dp"/><path class="ozp46jb5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ice-cream-2"} {...others} />);
}

export default Component;
