import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ls565ikvq.css';
import '../../css/z/zspdhebde.css';
import '../../css/x/xts1iybur.css';
import '../../css/r/ru6vui9dw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ls565ikvq"/><path class="zspdhebde"/><path class="xts1iybur"/><path class="ru6vui9dw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:pathfinder-exclude"} {...others} />);
}

export default Component;
