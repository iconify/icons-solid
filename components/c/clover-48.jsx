import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7k49nwxu.css';
import '../../css/t/tkczr6bqo.css';
import '../../css/o/o3ighkj3w.css';
import '../../css/f/fdps2pjit.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o7k49nwxu"/><path class="tkczr6bqo"/><path class="o3ighkj3w"/><path class="fdps2pjit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clover-48"} {...others} />);
}

export default Component;
