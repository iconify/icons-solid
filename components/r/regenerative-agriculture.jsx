import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ar1370yxm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ar1370yxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:regenerative-agriculture"} {...others} />);
}

export default Component;
