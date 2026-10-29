import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8j5tt9nv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s8j5tt9nv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shield-check-solid"} {...others} />);
}

export default Component;
