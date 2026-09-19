import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdy0823vy.css';
import '../../css/e/edp5htv8r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wdy0823vy"/><path class="edp5htv8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:autoit"} {...others} />);
}

export default Component;
