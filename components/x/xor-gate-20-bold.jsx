import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzflhmqcl.css';
import '../../css/h/hvkkpmbju.css';
import '../../css/h/h8goprb6e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dzflhmqcl"/><path class="hvkkpmbju"/><path class="h8goprb6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:xor-gate-20-bold"} {...others} />);
}

export default Component;
