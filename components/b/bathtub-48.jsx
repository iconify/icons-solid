import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvkgehx6a.css';
import '../../css/f/fo-j22b0w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jvkgehx6a"/><path class="fo-j22b0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bathtub-48"} {...others} />);
}

export default Component;
