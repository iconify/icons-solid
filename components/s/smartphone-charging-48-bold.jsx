import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svb9bze3d.css';
import '../../css/m/mfy25ks6s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="svb9bze3d"/><path class="mfy25ks6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smartphone-charging-48-bold"} {...others} />);
}

export default Component;
