import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4geewbmp.css';
import '../../css/e/e57f5cgnd.css';
import '../../css/l/lo0zzvbev.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j4geewbmp"/><path class="e57f5cgnd"/><path class="lo0zzvbev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ballot-box-48-bold"} {...others} />);
}

export default Component;
