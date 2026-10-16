import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8r7dteuj.css';
import '../../css/s/sktgnkdka.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e8r7dteuj"/><path class="sktgnkdka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-pouch-48-bold"} {...others} />);
}

export default Component;
