import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zx59guuve.css';
import '../../css/n/n-q9xfbzi.css';
import '../../css/c/c851adchj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zx59guuve"/><path class="n-q9xfbzi"/><path class="c851adchj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clipboard-x-48"} {...others} />);
}

export default Component;
