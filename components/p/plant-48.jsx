import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpqtu-bsh.css';
import '../../css/c/cq09toq9d.css';
import '../../css/l/lmmaxg6dh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cpqtu-bsh"/><path class="cq09toq9d"/><path class="lmmaxg6dh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plant-48"} {...others} />);
}

export default Component;
