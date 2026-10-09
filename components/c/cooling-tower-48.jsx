import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shh92ibos.css';
import '../../css/h/hw51tgbfe.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="shh92ibos"/><path class="hw51tgbfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cooling-tower-48"} {...others} />);
}

export default Component;
