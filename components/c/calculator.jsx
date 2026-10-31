import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/flpp0x1pp.css';
import '../../css/s/sbrhjh0fs.css';
import '../../css/q/qaqt0kbdl.css';
import '../../css/f/f06d4cboc.css';
import '../../css/k/kf49rtb2j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="flpp0x1pp wm-shadow"/><path class="sbrhjh0fs wm-shadow"/><path class="qaqt0kbdl"/><path class="f06d4cboc"/><path class="kf49rtb2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:calculator"} {...others} />);
}

export default Component;
