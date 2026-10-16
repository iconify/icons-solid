import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7vs37bmn.css';
import '../../css/t/t1-50l-2z.css';
import '../../css/e/e7avd0rgh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a7vs37bmn"/><path class="t1-50l-2z"/><path class="e7avd0rgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:list-tree-48"} {...others} />);
}

export default Component;
