import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqf5v4byj.css';
import '../../css/j/jna5_7bho.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wqf5v4byj"/><path class="jna5_7bho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:conveyor-48-bold"} {...others} />);
}

export default Component;
