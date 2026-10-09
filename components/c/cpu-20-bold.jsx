import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ih_a-vb3d.css';
import '../../css/t/tf0qaik3p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ih_a-vb3d"/><path class="tf0qaik3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cpu-20-bold"} {...others} />);
}

export default Component;
