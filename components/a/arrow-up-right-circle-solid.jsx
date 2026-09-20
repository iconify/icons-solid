import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ib8o1bb8m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ib8o1bb8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:arrow-up-right-circle-solid"} {...others} />);
}

export default Component;
