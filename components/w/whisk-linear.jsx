import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0h_4qbwh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d0h_4qbwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:whisk-linear"} {...others} />);
}

export default Component;
