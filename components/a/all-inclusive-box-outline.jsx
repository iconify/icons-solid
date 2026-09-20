import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1a8l432h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x1a8l432h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:all-inclusive-box-outline"} {...others} />);
}

export default Component;
