import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dwyomxb4c.css';
import '../../css/k/k82vtibwo.css';
import '../../css/g/g8lts85lh.css';
import '../../css/l/lna12zbhx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dwyomxb4c"/><path class="k82vtibwo"/><path class="g8lts85lh"/><path class="lna12zbhx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:mosque"} {...others} />);
}

export default Component;
