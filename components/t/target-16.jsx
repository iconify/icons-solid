import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mc4ux5b6q.css';
import '../../css/r/ry9w0vp7y.css';
import '../../css/f/fm0qv_wws.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mc4ux5b6q"/><path class="ry9w0vp7y"/><path class="fm0qv_wws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:target-16"} {...others} />);
}

export default Component;
