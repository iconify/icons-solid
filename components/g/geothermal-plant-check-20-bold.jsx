import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d25p8sb0p.css';
import '../../css/j/j1ynsb0aw.css';
import '../../css/z/z0v5_fbef.css';
import '../../css/s/sh06c0bcw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d25p8sb0p"/><path class="j1ynsb0aw"/><path class="z0v5_fbef"/><path class="sh06c0bcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:geothermal-plant-check-20-bold"} {...others} />);
}

export default Component;
