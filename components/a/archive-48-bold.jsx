import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j8xdzkbcj.css';
import '../../css/o/oky5uoojn.css';
import '../../css/s/swikctbux.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j8xdzkbcj"/><path class="oky5uoojn"/><path class="swikctbux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:archive-48-bold"} {...others} />);
}

export default Component;
