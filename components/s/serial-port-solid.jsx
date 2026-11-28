import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hu2k_gbzh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hu2k_gbzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:serial-port-solid"} {...others} />);
}

export default Component;
