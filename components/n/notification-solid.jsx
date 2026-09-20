import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ua9nt7b1g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ua9nt7b1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:notification-solid"} {...others} />);
}

export default Component;
