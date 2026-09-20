import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uh71cgazm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uh71cgazm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:arrow-bottom-right-bold-box-outline"} {...others} />);
}

export default Component;
