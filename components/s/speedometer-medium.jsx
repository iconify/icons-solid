import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jhvp3reay.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jhvp3reay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:speedometer-medium"} {...others} />);
}

export default Component;
