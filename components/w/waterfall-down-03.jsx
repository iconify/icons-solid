import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sd0v0ry5k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sd0v0ry5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:waterfall-down-03"} {...others} />);
}

export default Component;
