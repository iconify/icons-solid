import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzh6r_7vk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rzh6r_7vk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-column-stacked"} {...others} />);
}

export default Component;
