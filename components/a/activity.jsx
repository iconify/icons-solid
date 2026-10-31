import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vqud2ryyv.css';
import '../../css/t/tvg7l_byo.css';
import '../../css/v/vza98ebat.css';
import '../../css/x/xq269nwym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="vqud2ryyv wm-shadow"/><path class="tvg7l_byo wm-shadow"/><path class="vza98ebat"/><path class="xq269nwym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:activity"} {...others} />);
}

export default Component;
