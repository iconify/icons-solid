import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mrkgyhpda.css';
import '../../css/k/k82vtibwo.css';
import '../../css/j/jw7z1cb2x.css';
import '../../css/o/ouw7txhxk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mrkgyhpda"/><path class="k82vtibwo"/><path class="jw7z1cb2x"/><path class="ouw7txhxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:building-4"} {...others} />);
}

export default Component;
