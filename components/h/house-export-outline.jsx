import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/agkix7v6e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="agkix7v6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:house-export-outline"} {...others} />);
}

export default Component;
