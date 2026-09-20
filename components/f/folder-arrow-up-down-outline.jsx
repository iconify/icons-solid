import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cyaf8byaq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cyaf8byaq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:folder-arrow-up-down-outline"} {...others} />);
}

export default Component;
