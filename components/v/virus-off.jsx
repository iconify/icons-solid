import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wg9h2sbig.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wg9h2sbig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:virus-off"} {...others} />);
}

export default Component;
