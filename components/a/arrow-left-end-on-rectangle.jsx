import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxjktu_0r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nxjktu_0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-left-end-on-rectangle"} {...others} />);
}

export default Component;
