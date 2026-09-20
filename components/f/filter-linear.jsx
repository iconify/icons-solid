import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xnfu5w9eq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xnfu5w9eq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:filter-linear"} {...others} />);
}

export default Component;
