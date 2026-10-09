import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e44d_bbpo.css';
import '../../css/n/n4r5wlwiq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e44d_bbpo"/><path class="n4r5wlwiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chef-hat-20-bold"} {...others} />);
}

export default Component;
