import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_9vzjx3z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g_9vzjx3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:angry-solid"} {...others} />);
}

export default Component;
