import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rurq22b5z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rurq22b5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:lock-open-keyhole-solid"} {...others} />);
}

export default Component;
