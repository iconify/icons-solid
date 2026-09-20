import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/divj58blz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="divj58blz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:letter-g-hexagon-solid"} {...others} />);
}

export default Component;
