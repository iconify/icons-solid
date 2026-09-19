import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g48a6w0ps.css';
import '../../css/x/xwy_3hbfw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g48a6w0ps"/><path class="xwy_3hbfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-thunderstorm"} {...others} />);
}

export default Component;
