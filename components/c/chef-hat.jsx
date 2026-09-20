import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_w07d5xn.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="k_w07d5xn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:chef-hat"} {...others} />);
}

export default Component;
