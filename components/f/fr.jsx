import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pmv003mpv.css';
import '../../css/n/nyrzecbqp.css';
import '../../css/r/r8etlgiam.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="pmv003mpv"/><path class="nyrzecbqp"/><path class="r8etlgiam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:fr"} {...others} />);
}

export default Component;
