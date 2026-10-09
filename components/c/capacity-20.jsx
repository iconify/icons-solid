import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swnxxbo0p.css';
import '../../css/l/l4yoqg4nl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="swnxxbo0p"/><path class="l4yoqg4nl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:capacity-20"} {...others} />);
}

export default Component;
