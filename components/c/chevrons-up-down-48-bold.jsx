import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ma2qfxbce.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ma2qfxbce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chevrons-up-down-48-bold"} {...others} />);
}

export default Component;
