import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3d7eo2zl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o3d7eo2zl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:location-right-outline"} {...others} />);
}

export default Component;
