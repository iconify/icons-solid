import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4n60ybfu.css';
import '../../css/e/e52uakbgw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k4n60ybfu"/><path class="e52uakbgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rewind-48"} {...others} />);
}

export default Component;
