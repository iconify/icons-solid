import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hcezpobhl.css';
import '../../css/m/m2oqjubvh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hcezpobhl"/><path class="m2oqjubvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-negative-20"} {...others} />);
}

export default Component;
