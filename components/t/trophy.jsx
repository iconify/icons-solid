import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6qs1ir4n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i6qs1ir4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:trophy"} {...others} />);
}

export default Component;
