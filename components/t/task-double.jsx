import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gpwbhrmwg.css';
import '../../css/o/ozhoyrbed.css';
import '../../css/l/lryotrmjk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gpwbhrmwg"/><path class="ozhoyrbed"/><path class="lryotrmjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:task-double"} {...others} />);
}

export default Component;
