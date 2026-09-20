import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n39kd-lul.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n39kd-lul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:traffic-cone-line"} {...others} />);
}

export default Component;
