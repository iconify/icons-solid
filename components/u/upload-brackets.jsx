import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yqxgtskzz.css';
import '../../css/s/sfy8kv3oc.css';
import '../../css/a/ar-q0y1tq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yqxgtskzz"/><path class="sfy8kv3oc"/><path class="ar-q0y1tq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:upload-brackets"} {...others} />);
}

export default Component;
