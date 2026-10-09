import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3qrw7b3x.css';
import '../../css/n/n2w7bjvhk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k3qrw7b3x"/><path class="n2w7bjvhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shipping-container-20"} {...others} />);
}

export default Component;
