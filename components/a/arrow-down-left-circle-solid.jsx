import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aj-82_nyx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aj-82_nyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:arrow-down-left-circle-solid"} {...others} />);
}

export default Component;
