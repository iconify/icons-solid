import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qpfa0qbmx.css';
import '../../css/d/d2zn93bqf.css';
import '../../css/m/mnu-t7_gg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="qpfa0qbmx"/><path class="d2zn93bqf"/><path class="mnu-t7_gg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:xvg"} {...others} />);
}

export default Component;
