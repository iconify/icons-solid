import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2-2zhbhc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p2-2zhbhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:home-2"} {...others} />);
}

export default Component;
