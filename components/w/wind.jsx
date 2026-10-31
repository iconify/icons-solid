import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/q64vjubag.css';
import '../../css/u/uo4pa5vpi.css';
import '../../css/l/lbp4_0bgi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="q64vjubag wm-shadow"/><path class="uo4pa5vpi wm-shadow"/><path class="lbp4_0bgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:wind"} {...others} />);
}

export default Component;
