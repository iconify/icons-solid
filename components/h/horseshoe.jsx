import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tf3q7_mjn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tf3q7_mjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:horseshoe"} {...others} />);
}

export default Component;
