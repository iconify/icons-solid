import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3f0m41nu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o3f0m41nu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:snowboarding-line"} {...others} />);
}

export default Component;
