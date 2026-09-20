import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rk7w6qbmh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rk7w6qbmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:flag-pin"} {...others} />);
}

export default Component;
