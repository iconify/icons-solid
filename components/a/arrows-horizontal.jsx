import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2_xz3bgh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d2_xz3bgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:arrows-horizontal"} {...others} />);
}

export default Component;
