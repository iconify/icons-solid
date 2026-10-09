import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k98tn-izd.css';
import '../../css/m/mjb6-8gcf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k98tn-izd"/><path class="mjb6-8gcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:generator-20-bold"} {...others} />);
}

export default Component;
