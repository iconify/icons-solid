import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_y62ub1b.css';
import '../../css/g/go0ezbdtl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x_y62ub1b"/><path class="go0ezbdtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:eye-off-48"} {...others} />);
}

export default Component;
