import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zhhvqwbng.css';
import '../../css/e/era03mble.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zhhvqwbng"/><path class="era03mble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scroll-48-bold"} {...others} />);
}

export default Component;
