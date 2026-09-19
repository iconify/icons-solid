import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wo68l_7-h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wo68l_7-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-arrow-to-top"} {...others} />);
}

export default Component;
