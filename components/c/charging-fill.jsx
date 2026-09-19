import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8x3bri7t.css';
import '../../css/y/yf5edlbyv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k8x3bri7t"/><path class="yf5edlbyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:charging-fill"} {...others} />);
}

export default Component;
