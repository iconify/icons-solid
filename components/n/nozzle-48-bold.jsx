import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jocyyo5fc.css';
import '../../css/n/nhe1boyvm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jocyyo5fc"/><path class="nhe1boyvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:nozzle-48-bold"} {...others} />);
}

export default Component;
