import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etqrn7b3n.css';
import '../../css/y/yq_d2zbwf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="etqrn7b3n"/><path class="yq_d2zbwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:floor-plan-20-bold"} {...others} />);
}

export default Component;
