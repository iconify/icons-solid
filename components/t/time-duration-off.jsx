import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yd3i1hf5i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yd3i1hf5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:time-duration-off"} {...others} />);
}

export default Component;
