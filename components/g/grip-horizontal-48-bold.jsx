import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nox51db9m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nox51db9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grip-horizontal-48-bold"} {...others} />);
}

export default Component;
