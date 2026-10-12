import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ecjx1yg4j.css';
import '../../css/l/l6k0rd2qb.css';
import '../../css/g/gzcgyebif.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ecjx1yg4j"/><path class="l6k0rd2qb"/><path class="gzcgyebif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mop-20"} {...others} />);
}

export default Component;
