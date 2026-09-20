import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mkfjl2n8m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mkfjl2n8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:intersect-solid"} {...others} />);
}

export default Component;
