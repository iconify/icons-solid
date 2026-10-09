import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ay__5bcmu.css';
import '../../css/f/ff8py9bze.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ay__5bcmu"/><path class="ff8py9bze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shipping-container-48"} {...others} />);
}

export default Component;
