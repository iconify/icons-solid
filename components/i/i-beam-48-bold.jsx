import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lcjkvkwqj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lcjkvkwqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:i-beam-48-bold"} {...others} />);
}

export default Component;
