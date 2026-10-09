import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1efy3xti.css';
import '../../css/t/t1wq7pbzx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x1efy3xti"/><path class="t1wq7pbzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:toaster-48-bold"} {...others} />);
}

export default Component;
