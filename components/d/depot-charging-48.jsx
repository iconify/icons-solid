import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tt3wdaccl.css';
import '../../css/d/d7a8hbbiq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tt3wdaccl"/><path class="d7a8hbbiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:depot-charging-48"} {...others} />);
}

export default Component;
