import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8mx5jbcs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t8mx5jbcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:user-check-48-bold"} {...others} />);
}

export default Component;
