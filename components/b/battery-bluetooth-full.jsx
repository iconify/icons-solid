import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nk2na2b6y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nk2na2b6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:battery-bluetooth-full"} {...others} />);
}

export default Component;
