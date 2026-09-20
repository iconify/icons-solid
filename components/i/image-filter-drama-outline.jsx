import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/izndy0u6l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="izndy0u6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:image-filter-drama-outline"} {...others} />);
}

export default Component;
