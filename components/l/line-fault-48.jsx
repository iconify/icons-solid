import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_g2f6aqs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k_g2f6aqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:line-fault-48"} {...others} />);
}

export default Component;
