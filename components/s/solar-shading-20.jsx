import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3ivimbut.css';
import '../../css/f/fqx9z9z0l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o3ivimbut"/><path class="fqx9z9z0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-shading-20"} {...others} />);
}

export default Component;
