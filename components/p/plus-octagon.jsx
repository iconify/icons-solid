import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_sl95aur.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j_sl95aur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:plus-octagon"} {...others} />);
}

export default Component;
