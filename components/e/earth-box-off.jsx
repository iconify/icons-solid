import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vhzm4jban.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vhzm4jban"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:earth-box-off"} {...others} />);
}

export default Component;
