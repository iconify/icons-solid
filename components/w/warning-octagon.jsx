import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ny2kalc0x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ny2kalc0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:warning-octagon"} {...others} />);
}

export default Component;
