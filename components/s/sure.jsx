import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qzdq8un1s.css';
import '../../css/m/mrfw0_bvm.css';
import '../../css/x/xoph-9b8t.css';

const viewBox = {"width":160,"height":145};
const content = `<g class="ft5dv1b6b"><path class="qzdq8un1s"/><path class="mrfw0_bvm"/><path class="xoph-9b8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:sure"} {...others} />);
}

export default Component;
