import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0rtidb-e.css';
import '../../css/f/fh1vxnxeg.css';
import '../../css/s/s1s0bim7b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-a z0rtidb-e"/><path class="fh1vxnxeg wm-k"/><path class="s1s0bim7b wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:cursor"} {...others} />);
}

export default Component;
