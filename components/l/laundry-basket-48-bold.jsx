import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9xk66b5z.css';
import '../../css/k/k8q9q9bme.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x9xk66b5z"/><path class="k8q9q9bme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:laundry-basket-48-bold"} {...others} />);
}

export default Component;
