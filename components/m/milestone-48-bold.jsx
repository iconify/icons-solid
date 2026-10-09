import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rv2a2jbrl.css';
import '../../css/x/x41cd7j7k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rv2a2jbrl"/><path class="x41cd7j7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:milestone-48-bold"} {...others} />);
}

export default Component;
