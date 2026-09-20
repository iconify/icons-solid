import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3ju9cb7o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h3ju9cb7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:wifi-strength-1-alert"} {...others} />);
}

export default Component;
