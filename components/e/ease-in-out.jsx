import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ij8-ce7zs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ij8-ce7zs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ease-in-out"} {...others} />);
}

export default Component;
