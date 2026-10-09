import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzq1-xdkg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jzq1-xdkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:quarry-48"} {...others} />);
}

export default Component;
