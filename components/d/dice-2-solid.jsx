import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vmzra2-rc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vmzra2-rc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:dice-2-solid"} {...others} />);
}

export default Component;
