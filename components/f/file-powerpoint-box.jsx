import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1c1x8bar.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w1c1x8bar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:file-powerpoint-box"} {...others} />);
}

export default Component;
