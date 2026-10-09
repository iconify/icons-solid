import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0pjpe9ss.css';
import '../../css/o/ols5a6b1f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w0pjpe9ss"/><path class="ols5a6b1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrows-horizontal-20"} {...others} />);
}

export default Component;
