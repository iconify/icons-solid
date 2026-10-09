import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcda5wmtv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vcda5wmtv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:signal-none-20"} {...others} />);
}

export default Component;
