import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fos8xgb1q.css';
import '../../css/g/g2ivodb2f.css';
import '../../css/z/zy9xw0nee.css';
import '../../css/v/vt-2nu9uw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="fos8xgb1q"/><path class="g2ivodb2f wm-k"/><path class="wm-a zy9xw0nee"/><path class="vt-2nu9uw wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:firecracker-string"} {...others} />);
}

export default Component;
