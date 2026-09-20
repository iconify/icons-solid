import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tbli70boo.css';
import '../../css/h/hhkbedc5d.css';
import '../../css/v/vnor8oomw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tbli70boo"/><path class="hhkbedc5d"/><path class="vnor8oomw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:asteroid-bold"} {...others} />);
}

export default Component;
