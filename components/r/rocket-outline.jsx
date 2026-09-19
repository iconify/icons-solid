import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9fy5tbbm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v9fy5tbbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:rocket-outline"} {...others} />);
}

export default Component;
