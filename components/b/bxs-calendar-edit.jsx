import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpvbe-bnh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vpvbe-bnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-calendar-edit"} {...others} />);
}

export default Component;
