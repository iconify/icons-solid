import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/ad3inpbmk.css';
import '../../css/u/u3t_70zmq.css';
import '../../css/j/ji__inbda.css';
import '../../css/o/ow1y8dbgh.css';
import '../../css/p/p8i967bcu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ad3inpbmk wm-shadow"/><path class="u3t_70zmq wm-shadow"/><path class="ji__inbda"/><path class="ow1y8dbgh"/><path class="p8i967bcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:video-camera"} {...others} />);
}

export default Component;
