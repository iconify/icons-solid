import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_3q33btz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h_3q33btz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:wifi-strength-0-lock"} {...others} />);
}

export default Component;
