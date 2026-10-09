import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zw5sfwb0q.css';
import '../../css/s/s_-b-lbsy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zw5sfwb0q"/><path class="s_-b-lbsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-warning-48"} {...others} />);
}

export default Component;
