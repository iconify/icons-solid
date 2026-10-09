import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y67e-ncjf.css';
import '../../css/c/cgzz0m8kb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y67e-ncjf"/><path class="cgzz0m8kb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:caliper-48"} {...others} />);
}

export default Component;
