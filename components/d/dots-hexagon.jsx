import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/og96pwarr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="og96pwarr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:dots-hexagon"} {...others} />);
}

export default Component;
