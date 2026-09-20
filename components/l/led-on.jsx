import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4pe5y8hf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k4pe5y8hf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:led-on"} {...others} />);
}

export default Component;
