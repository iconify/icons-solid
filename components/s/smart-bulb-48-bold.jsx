import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0m3wcb9a.css';
import '../../css/e/e72pk-7vm.css';
import '../../css/b/bowjjxblk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u0m3wcb9a"/><path class="e72pk-7vm"/><path class="bowjjxblk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-bulb-48-bold"} {...others} />);
}

export default Component;
