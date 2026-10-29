import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-rrd8bym.css';
import '../../css/f/f3to3mb5j.css';
import '../../css/z/zr52crbkn.css';
import '../../css/q/qwe5pxb5r.css';
import '../../css/q/qkjcp453b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h-rrd8bym wm-k"/><path class="f3to3mb5j wm-a"/><path class="wm-k zr52crbkn"/><path class="qwe5pxb5r wm-a"/><path class="qkjcp453b wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:webcam"} {...others} />);
}

export default Component;
