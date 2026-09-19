import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5y3i_byi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u5y3i_byi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:calendar-exclamation"} {...others} />);
}

export default Component;
