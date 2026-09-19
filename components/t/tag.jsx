import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5ix4pw3w.css';
import '../../css/y/yx_v63b6x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q5ix4pw3w"/><path class="yx_v63b6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:tag"} {...others} />);
}

export default Component;
