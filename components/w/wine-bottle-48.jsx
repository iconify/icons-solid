import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9s39grzg.css';
import '../../css/e/eueslcc2u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i9s39grzg"/><path class="eueslcc2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wine-bottle-48"} {...others} />);
}

export default Component;
