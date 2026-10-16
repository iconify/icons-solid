import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vzc0f4bbg.css';
import '../../css/d/d6nu3aclr.css';
import '../../css/m/mky7hybil.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vzc0f4bbg"/><path class="d6nu3aclr"/><path class="mky7hybil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:freezing-rain-48-bold"} {...others} />);
}

export default Component;
