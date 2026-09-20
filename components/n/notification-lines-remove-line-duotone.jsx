import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p0hhklb3f.css';
import '../../css/y/ynz9_ybsk.css';
import '../../css/j/jpdqneb7h.css';
import '../../css/r/r93-g0b4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="p0hhklb3f"/><path class="ynz9_ybsk"/><path class="jpdqneb7h"/><path class="r93-g0b4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notification-lines-remove-line-duotone"} {...others} />);
}

export default Component;
